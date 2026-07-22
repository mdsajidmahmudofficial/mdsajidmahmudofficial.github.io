import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const PROFILE_URL = "https://www.behance.net/itexpertsajid?locale=en_US";
const DATA_FILE = path.join(ROOT, "data", "projects.json");
const COVER_DIRECTORY = path.join(ROOT, "assets", "portfolio", "behance");
const SCRIPT_MARKER = '<script type="application/json" id="beconfig-store_state">';
const ALLOWED_COVER_HOSTS = new Set(["mir-s3-cdn-cf.behance.net", "mir-cdn.behance.net"]);

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function safeBehanceUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.hostname === "www.behance.net" && url.pathname.startsWith("/gallery/") ? url.href : null;
  } catch {
    return null;
  }
}

function safeCoverUrl(value) {
  if (typeof value !== "string") return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && ALLOWED_COVER_HOSTS.has(url.hostname) && url.pathname.startsWith("/projects/") ? url.href : null;
  } catch {
    return null;
  }
}

function extractProjects(state) {
  const projects = new Map();
  const visited = new Set();

  function visit(value, depth = 0) {
    if (!value || typeof value !== "object" || depth > 12 || visited.has(value)) return;
    visited.add(value);
    if (Array.isArray(value)) {
      value.forEach((item) => visit(item, depth + 1));
      return;
    }

    if (value.__typename === "Project") {
      const id = typeof value.id === "number" ? value.id : Number(value.id);
      const name = typeof value.name === "string" ? value.name.trim() : "";
      const url = safeBehanceUrl(value.url);
      const covers = isRecord(value.covers) && Array.isArray(value.covers.allAvailable) ? value.covers.allAvailable : [];
      const cover = covers
        .filter(isRecord)
        .sort((a, b) => Number(b.width || 0) - Number(a.width || 0))
        .map((item) => safeCoverUrl(item.url))
        .find(Boolean);
      if (Number.isFinite(id) && name && url && cover) {
        projects.set(id, {
          id,
          name,
          url,
          cover,
          publishedOn: typeof value.publishedOn === "number" ? value.publishedOn : 0
        });
      }
    }

    Object.values(value).forEach((item) => visit(item, depth + 1));
  }

  visit(state);
  return [...projects.values()].sort((a, b) => b.publishedOn - a.publishedOn).slice(0, 18);
}

function parseBehanceState(html) {
  let jsonStart = html.indexOf(SCRIPT_MARKER);
  if (jsonStart >= 0) {
    jsonStart += SCRIPT_MARKER.length;
  } else {
    const match = html.match(/<script[^>]+id=["']beconfig-store_state["'][^>]*>/i);
    if (!match || typeof match.index !== "number") throw new Error("Behance project state was not found");
    jsonStart = match.index + match[0].length;
  }
  const jsonEnd = html.indexOf("</script>", jsonStart);
  if (jsonEnd < 0) throw new Error("Behance project state was incomplete");
  return JSON.parse(html.slice(jsonStart, jsonEnd));
}

async function downloadCover(project) {
  const response = await fetch(project.cover, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; MD-Sajid-Mahmud-Portfolio/1.0)" }
  });
  if (!response.ok) throw new Error(`Cover download returned ${response.status}`);
  const contentType = response.headers.get("content-type") || "";
  const extension = contentType.includes("png") ? "png" : contentType.includes("webp") ? "webp" : "jpg";
  const filename = `project-${project.id}.${extension}`;
  const destination = path.join(COVER_DIRECTORY, filename);
  const buffer = Buffer.from(await response.arrayBuffer());
  if (buffer.byteLength < 1000 || buffer.byteLength > 15_000_000) throw new Error("Cover file size was outside the expected range");
  await writeFile(destination, buffer);
  return `assets/portfolio/behance/${filename}`;
}

async function main() {
  await mkdir(COVER_DIRECTORY, { recursive: true });
  const current = JSON.parse(await readFile(DATA_FILE, "utf8"));
  const known = new Map((current.projects || []).map((project) => [Number(project.id), project]));

  const response = await fetch(PROFILE_URL, {
    headers: {
      "User-Agent": "Mozilla/5.0 (compatible; MD-Sajid-Mahmud-Portfolio/1.0; +https://www.behance.net/itexpertsajid)",
      Accept: "text/html,application/xhtml+xml"
    }
  });
  if (!response.ok) throw new Error(`Behance returned ${response.status}`);
  const projects = extractProjects(parseBehanceState(await response.text()));
  if (!projects.length) throw new Error("No public Behance projects were found; keeping the existing project data");

  const nextProjects = [];
  const retainedFiles = new Set();
  for (const project of projects) {
    const previous = known.get(project.id);
    let image = project.cover;
    try {
      image = await downloadCover(project);
      retainedFiles.add(path.basename(image));
    } catch (error) {
      const previousImage = typeof previous?.image === "string" ? previous.image : "";
      if (previousImage.startsWith(`assets/portfolio/behance/project-${project.id}.`)) {
        image = previousImage;
        retainedFiles.add(path.basename(previousImage));
        console.warn(`Keeping the existing local cover for project ${project.id}: ${error.message}`);
      } else {
        console.warn(`Using Behance CDN cover for project ${project.id}: ${error.message}`);
      }
    }
    nextProjects.push({
      id: project.id,
      name: project.name,
      title: previous?.title || { en: project.name, bn: project.name },
      category: previous?.category || { en: "Latest Behance project", bn: "সর্বশেষ Behance প্রজেক্ট" },
      image,
      url: project.url,
      publishedOn: project.publishedOn
    });
  }

  for (const filename of await readdir(COVER_DIRECTORY)) {
    if (/^project-\d+\.(?:jpe?g|png|webp)$/i.test(filename) && !retainedFiles.has(filename)) {
      await unlink(path.join(COVER_DIRECTORY, filename));
    }
  }

  const projectsChanged = JSON.stringify(current.projects || []) !== JSON.stringify(nextProjects);
  const output = {
    source: "behance",
    updatedAt: projectsChanged ? new Date().toISOString() : (current.updatedAt || new Date().toISOString()),
    profile: "https://www.behance.net/itexpertsajid",
    projects: nextProjects
  };
  await writeFile(DATA_FILE, `${JSON.stringify(output, null, 2)}\n`, "utf8");
  console.log(`Synced ${nextProjects.length} Behance projects.`);
}

main().catch((error) => {
  console.error(`Behance sync failed: ${error.message}`);
  process.exitCode = 1;
});
