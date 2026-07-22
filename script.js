(function () {
  "use strict";

  const PROFILE_URL = "https://www.behance.net/itexpertsajid";
  const WHATSAPP_NUMBER = "8801782416596";
  const CAROUSEL_INTERVAL = 5600;
  const externalIcon = '<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M8 6h10v10M18 6 6 18" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>';

  const copy = {
    skip: { en: "Skip to main content", bn: "মূল কনটেন্টে যান" },
    role: { en: "Graphic Designer", bn: "গ্রাফিক ডিজাইনার" },
    "nav.work": { en: "Work", bn: "কাজ" },
    "nav.services": { en: "Services", bn: "সেবা" },
    "nav.about": { en: "About", bn: "পরিচিতি" },
    "nav.process": { en: "Process", bn: "প্রক্রিয়া" },
    "nav.contact": { en: "Contact", bn: "যোগাযোগ" },
    heroEyebrow: { en: "MD SAJID MAHMUD · GRAPHIC DESIGNER · BANGLADESH", bn: "এমডি সাজিদ মাহমুদ · গ্রাফিক ডিজাইনার · বাংলাদেশ" },
    availability: { en: "Available for freelance & full-time", bn: "ফ্রিল্যান্স ও ফুল-টাইম কাজের জন্য প্রস্তুত" },
    heroTitle: { en: "Social campaigns that move brands.", bn: "সোশ্যাল ক্যাম্পেইন, যা ব্র্যান্ডকে এগিয়ে নেয়।" },
    heroBody: { en: "I turn products, offers, and brand stories into clear, high-impact campaign visuals built to earn attention and inspire action.", bn: "পণ্য, অফার ও ব্র্যান্ডের গল্পকে আমি স্পষ্ট, আকর্ষণীয় ক্যাম্পেইন ভিজ্যুয়ালে রূপ দিই—যা নজর কাড়ে এবং মানুষকে পদক্ষেপ নিতে উৎসাহিত করে।" },
    viewWork: { en: "View selected work", bn: "নির্বাচিত কাজ দেখুন" },
    startProject: { en: "Start a project", bn: "প্রজেক্ট শুরু করুন" },
    "disciplines.0": { en: "Social ads", bn: "সোশ্যাল অ্যাড" },
    "disciplines.1": { en: "Campaign systems", bn: "ক্যাম্পেইন সিস্টেম" },
    "disciplines.2": { en: "Creative direction", bn: "ক্রিয়েটিভ ডিরেকশন" },
    toolsLabel: { en: "WORKFLOW TOOLKIT", bn: "কাজের টুলস" },
    workEyebrow: { en: "SELECTED WORK / 01", bn: "নির্বাচিত কাজ / ০১" },
    workTitle: { en: "Campaigns made to be seen.", bn: "যে ক্যাম্পেইন চোখে পড়ে।" },
    workBody: { en: "Selected commercial projects from my Behance portfolio. Every card opens the original project.", bn: "আমার Behance পোর্টফোলিও থেকে নির্বাচিত কমার্শিয়াল প্রজেক্ট। প্রতিটি কার্ড থেকে মূল প্রজেক্টটি খোলা যাবে।" },
    syncNote: { en: "Automatically refreshed from the public Behance profile", bn: "Public Behance প্রোফাইল থেকে স্বয়ংক্রিয়ভাবে আপডেট হয়" },
    allBehance: { en: "Explore full Behance profile", bn: "সম্পূর্ণ Behance প্রোফাইল দেখুন" },
    servicesEyebrow: { en: "SERVICES / 02", bn: "সেবা / ০২" },
    servicesTitle: { en: "A focused design partner for brand campaigns.", bn: "ব্র্যান্ড ক্যাম্পেইনের জন্য মনোযোগী ডিজাইন পার্টনার।" },
    servicesBody: { en: "From one launch creative to a complete campaign system, every deliverable is designed for clarity, consistency, and commercial impact.", bn: "একটি লঞ্চ ক্রিয়েটিভ থেকে পূর্ণ ক্যাম্পেইন সিস্টেম—প্রতিটি ডিজাইন তৈরি হয় স্বচ্ছতা, ধারাবাহিকতা ও কমার্শিয়াল প্রভাবের কথা মাথায় রেখে।" },
    "services.0.title": { en: "Social media ad design", bn: "সোশ্যাল মিডিয়া অ্যাড ডিজাইন" },
    "services.0.body": { en: "Scroll-stopping commercial creatives for launches, offers, and always-on brand communication.", bn: "লঞ্চ, অফার ও নিয়মিত ব্র্যান্ড কমিউনিকেশনের জন্য নজরকাড়া কমার্শিয়াল ক্রিয়েটিভ।" },
    "services.1.title": { en: "Campaign systems", bn: "ক্যাম্পেইন সিস্টেম" },
    "services.1.body": { en: "A connected visual direction across multiple posts, formats, and phases of a campaign.", bn: "ক্যাম্পেইনের একাধিক পোস্ট, ফরম্যাট ও ধাপে একই ধারাবাহিক ভিজ্যুয়াল ডিরেকশন।" },
    "services.2.title": { en: "Banners & posters", bn: "ব্যানার ও পোস্টার" },
    "services.2.body": { en: "Bold, information-led layouts for digital promotion, events, products, and announcements.", bn: "ডিজিটাল প্রোমোশন, ইভেন্ট, পণ্য ও ঘোষণার জন্য তথ্যনির্ভর শক্তিশালী লেআউট।" },
    "services.3.title": { en: "Brand visuals", bn: "ব্র্যান্ড ভিজ্যুয়াল" },
    "services.3.body": { en: "Flexible visual assets that make a brand feel recognizable, polished, and consistent.", bn: "ব্র্যান্ডকে পরিচিত, পরিপাটি ও ধারাবাহিক করে তোলার জন্য ব্যবহারযোগ্য ভিজ্যুয়াল অ্যাসেট।" },
    "services.4.title": { en: "Creative direction", bn: "ক্রিয়েটিভ ডিরেকশন" },
    "services.4.body": { en: "Concept, art direction, typography, color, and composition shaped into one clear campaign language.", bn: "কনসেপ্ট, আর্ট ডিরেকশন, টাইপোগ্রাফি, রঙ ও কম্পোজিশনকে এক স্পষ্ট ক্যাম্পেইন ভাষায় রূপ দেওয়া।" },
    toolkitEyebrow: { en: "TOOLS / 03", bn: "টুলস / ০৩" },
    toolkitTitle: { en: "Tools support the idea.", bn: "আইডিয়াকে শক্তিশালী করে টুলস।" },
    toolkitBody: { en: "A practical creative workflow for compositing, vector design, rapid exploration, and campaign production.", bn: "কম্পোজিটিং, ভেক্টর ডিজাইন, দ্রুত আইডিয়া এক্সপ্লোরেশন এবং ক্যাম্পেইন প্রোডাকশনের জন্য কার্যকর ক্রিয়েটিভ ওয়ার্কফ্লো।" },
    toolkitNote: { en: "Workflow capabilities · No brand affiliation implied", bn: "ওয়ার্কফ্লো দক্ষতা · কোনো ব্র্যান্ড অ্যাফিলিয়েশন দাবি করা হচ্ছে না" },
    "tools.0": { en: "Compositing", bn: "কম্পোজিটিং" },
    "tools.1": { en: "Vector systems", bn: "ভেক্টর সিস্টেম" },
    "tools.2": { en: "Fast adaptation", bn: "দ্রুত অ্যাডাপ্টেশন" },
    "tools.3": { en: "Idea exploration", bn: "আইডিয়া এক্সপ্লোরেশন" },
    campaignDesk: { en: "Campaign desk / 2026", bn: "ক্যাম্পেইন ডেস্ক / ২০২৬" },
    realBehanceWork: { en: "Real Behance work", bn: "Behance-এর আসল কাজ" },
    aboutEyebrow: { en: "ABOUT / 04", bn: "পরিচিতি / ০৪" },
    aboutTitle: { en: "Design built for the feed—and beyond.", bn: "ফিডের জন্য তৈরি ডিজাইন—যার প্রভাব তারও বাইরে।" },
    aboutBody: { en: "I’m MD Sajid Mahmud, a Bangladesh-based graphic designer specializing in branding, social media design, logos, banners, and posters. My work combines visual storytelling, precision, and campaign-ready systems to help brands show up with confidence.", bn: "আমি এমডি সাজিদ মাহমুদ, বাংলাদেশভিত্তিক একজন গ্রাফিক ডিজাইনার। ব্র্যান্ডিং, সোশ্যাল মিডিয়া ডিজাইন, লোগো, ব্যানার ও পোস্টার ডিজাইনে কাজ করি। ভিজ্যুয়াল স্টোরিটেলিং, নির্ভুলতা এবং ক্যাম্পেইন-রেডি সিস্টেমের মাধ্যমে ব্র্যান্ডকে আত্মবিশ্বাসের সঙ্গে উপস্থাপন করাই আমার লক্ষ্য।" },
    factLocation: { en: "Location", bn: "অবস্থান" },
    factAvailability: { en: "Availability", bn: "কাজের সুযোগ" },
    factExperience: { en: "Experience", bn: "অভিজ্ঞতা" },
    location: { en: "Bangladesh", bn: "বাংলাদেশ" },
    status: { en: "Freelance & full-time", bn: "ফ্রিল্যান্স ও ফুল-টাইম" },
    experience: { en: "Adobe Stock & Vecteezy contributor experience", bn: "Adobe Stock ও Vecteezy কন্ট্রিবিউটর অভিজ্ঞতা" },
    fullProfile: { en: "Read the full Behance profile", bn: "সম্পূর্ণ Behance প্রোফাইল পড়ুন" },
    processEyebrow: { en: "PROCESS / 05", bn: "প্রক্রিয়া / ০৫" },
    processTitle: { en: "Clear from brief to delivery.", bn: "ব্রিফ থেকে ডেলিভারি—পুরো প্রক্রিয়া স্বচ্ছ।" },
    processBody: { en: "A simple four-step workflow keeps feedback focused and the final campaign consistent.", bn: "সহজ চার ধাপের ওয়ার্কফ্লো ফিডব্যাককে রাখে নির্দিষ্ট এবং চূড়ান্ত ক্যাম্পেইনকে রাখে ধারাবাহিক।" },
    "process.0.title": { en: "Brief", bn: "ব্রিফ" },
    "process.0.body": { en: "We define the goal, audience, offer, formats, and timeline.", bn: "লক্ষ্য, অডিয়েন্স, অফার, প্রয়োজনীয় ফরম্যাট ও সময়সীমা নির্ধারণ করি।" },
    "process.1.title": { en: "Concept", bn: "কনসেপ্ট" },
    "process.1.body": { en: "I shape the visual angle, hierarchy, mood, and core campaign idea.", bn: "ভিজ্যুয়াল অ্যাঙ্গেল, হায়ারার্কি, মুড ও মূল ক্যাম্পেইন আইডিয়া তৈরি করি।" },
    "process.2.title": { en: "Design system", bn: "ডিজাইন সিস্টেম" },
    "process.2.body": { en: "The approved direction becomes a consistent, adaptable set of creatives.", bn: "অনুমোদিত ডিরেকশনকে ধারাবাহিক ও বিভিন্ন ফরম্যাটে ব্যবহারযোগ্য ক্রিয়েটিভে রূপ দিই।" },
    "process.3.title": { en: "Delivery", bn: "ডেলিভারি" },
    "process.3.body": { en: "Final files are prepared for the agreed channels and campaign formats.", bn: "নির্ধারিত চ্যানেল ও ক্যাম্পেইন ফরম্যাট অনুযায়ী চূড়ান্ত ফাইল প্রস্তুত করি।" },
    contactEyebrow: { en: "LET’S WORK TOGETHER / 06", bn: "চলুন একসঙ্গে কাজ করি / ০৬" },
    contactTitle: { en: "Let’s talk about your next design.", bn: "আপনার পরবর্তী ডিজাইনটি নিয়ে কথা বলি।" },
    contactBody: { en: "Send a direct WhatsApp message with your product, goal, and timeline. The inquiry is prefilled in English and Bangla.", bn: "আপনার পণ্য, লক্ষ্য ও সময়সীমা জানিয়ে সরাসরি WhatsApp করুন। মেসেজটি ইংরেজি ও বাংলা—দুই ভাষাতেই আগে থেকে লেখা থাকবে।" },
    chatTitle: { en: "Start a WhatsApp conversation", bn: "WhatsApp-এ কথা শুরু করুন" },
    chatBody: { en: "Share a few details and continue directly in WhatsApp.", bn: "কিছু তথ্য দিন, তারপর সরাসরি WhatsApp-এ কথা বলুন।" },
    nameLabel: { en: "Name", bn: "নাম" },
    namePlaceholder: { en: "Your name", bn: "আপনার নাম" },
    emailLabel: { en: "Email", bn: "ইমেইল" },
    emailPlaceholder: { en: "you@example.com", bn: "you@example.com" },
    messageLabel: { en: "Message", bn: "মেসেজ" },
    messagePlaceholder: { en: "Tell me about your project...", bn: "আপনার প্রজেক্ট সম্পর্কে লিখুন..." },
    sendWhatsApp: { en: "Continue to WhatsApp", bn: "WhatsApp-এ পাঠান" },
    chatPrompt: { en: "Need a design? Let’s chat on WhatsApp!", bn: "ডিজাইন প্রয়োজন? WhatsApp-এ কথা বলুন!" },
    directMessage: { en: "Send a direct message", bn: "সরাসরি মেসেজ পাঠান" },
    footerNote: { en: "Social media ads · Campaign design · Bangladesh", bn: "সোশ্যাল মিডিয়া অ্যাড · ক্যাম্পেইন ডিজাইন · বাংলাদেশ" },
    rights: { en: "All rights reserved.", bn: "সর্বস্বত্ব সংরক্ষিত।" }
  };

  const fallbackProjects = [
    { id: 253077919, name: "Fresh Product Ad Series", title: { en: "Fresh Product Ad Series", bn: "ফ্রেশ প্রোডাক্ট অ্যাড সিরিজ" }, category: { en: "FMCG · Product advertising", bn: "এফএমসিজি · প্রোডাক্ট অ্যাডভার্টাইজিং" }, image: "assets/portfolio/fresh-product-ad-series.png", url: "https://www.behance.net/gallery/253077919/Fresh-Product-Ad-Series" },
    { id: 253067663, name: "Nature Boost Campaign | Vol. 03", title: { en: "Nature Boost Campaign | Vol. 03", bn: "নেচার বুস্ট ক্যাম্পেইন | ভলিউম ০৩" }, category: { en: "Wellness · Product campaign", bn: "ওয়েলনেস · প্রোডাক্ট ক্যাম্পেইন" }, image: "assets/portfolio/nature-boost-campaign.png", url: "https://www.behance.net/gallery/253067663/Nature-Boost-Campaign-Vol-03" },
    { id: 253049351, name: "Luxury Skincare Collection | Vol. 02", title: { en: "Luxury Skincare Collection | Vol. 02", bn: "লাক্সারি স্কিনকেয়ার কালেকশন | ভলিউম ০২" }, category: { en: "Beauty · Social media design", bn: "বিউটি · সোশ্যাল মিডিয়া ডিজাইন" }, image: "assets/portfolio/luxury-skincare.png", url: "https://www.behance.net/gallery/253049351/Luxury-Skincare-Social-Media-Design-Collection-Vol-02" },
    { id: 253047895, name: "Organic Honey Collection | Vol. 01", title: { en: "Organic Honey Collection | Vol. 01", bn: "অর্গানিক হানি কালেকশন | ভলিউম ০১" }, category: { en: "Food · Natural product campaign", bn: "ফুড · ন্যাচারাল প্রোডাক্ট ক্যাম্পেইন" }, image: "assets/portfolio/organic-honey.png", url: "https://www.behance.net/gallery/253047895/Organic-Honey-Social-Media-Design-Collection-Vol-01" },
    { id: 253021875, name: "Luxury Apparel Collection | Vol. 03", title: { en: "Luxury Apparel Collection | Vol. 03", bn: "লাক্সারি অ্যাপারেল কালেকশন | ভলিউম ০৩" }, category: { en: "Fashion · Campaign collection", bn: "ফ্যাশন · ক্যাম্পেইন কালেকশন" }, image: "assets/portfolio/luxury-apparel-vol-03.png", url: "https://www.behance.net/gallery/253021875/Luxury-Apparel-Social-Media-Design-Collection-Vol-03" },
    { id: 252985899, name: "Next Apparel Campaigns | Vol. 02", title: { en: "Next Apparel Campaigns | Vol. 02", bn: "নেক্সট অ্যাপারেল ক্যাম্পেইন | ভলিউম ০২" }, category: { en: "Apparel · Visual campaign", bn: "অ্যাপারেল · ভিজ্যুয়াল ক্যাম্পেইন" }, image: "assets/portfolio/next-apparel-vol-02.png", url: "https://www.behance.net/gallery/252985899/Next-Apparel-Campaigns-Vol-02" },
    { id: 252973811, name: "Fashion Marketing Campaigns | Vol. 01", title: { en: "Fashion Marketing Campaigns | Vol. 01", bn: "ফ্যাশন মার্কেটিং ক্যাম্পেইন | ভলিউম ০১" }, category: { en: "Fashion · Social advertising", bn: "ফ্যাশন · সোশ্যাল অ্যাডভার্টাইজিং" }, image: "assets/portfolio/fashion-marketing-vol-01.png", url: "https://www.behance.net/gallery/252973811/Fashion-Marketing-Campaigns-Vol-01" }
  ];

  let language = "en";
  let projects = fallbackProjects.slice();
  let heroSlide = 0;
  let carouselTimer = null;
  let carouselPaused = false;
  let chatOpen = false;

  const portfolio = document.querySelector(".portfolio");
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const chatPanel = document.querySelector(".whatsapp-panel");
  const chatLauncher = document.querySelector(".whatsapp-launcher");
  const chatPrompt = document.querySelector(".whatsapp-prompt");
  const backToTop = document.querySelector(".back-to-top");
  const heroPoster = document.querySelector(".hero-carousel");

  function text(key) {
    return copy[key] ? copy[key][language] : key;
  }

  function localized(project, key) {
    const value = project[key];
    if (value && typeof value === "object") return value[language] || value.en || project.name || "Untitled project";
    if (typeof value === "string" && value) return value;
    if (key === "category") return language === "bn" ? "সর্বশেষ Behance প্রজেক্ট" : "Latest Behance project";
    return project.name || "Untitled project";
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  }

  function safeProjectUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:" && url.hostname === "www.behance.net" && url.pathname.startsWith("/gallery/") ? url.href : PROFILE_URL;
    } catch (_error) {
      return PROFILE_URL;
    }
  }

  function safeImageUrl(value) {
    if (typeof value !== "string") return "assets/portfolio/fresh-product-ad-series.png";
    if (/^assets\/portfolio\/[a-zA-Z0-9_./-]+$/.test(value)) return value;
    try {
      const url = new URL(value);
      const allowed = ["mir-s3-cdn-cf.behance.net", "mir-cdn.behance.net"];
      return url.protocol === "https:" && allowed.includes(url.hostname) ? url.href : "assets/portfolio/fresh-product-ad-series.png";
    } catch (_error) {
      return "assets/portfolio/fresh-product-ad-series.png";
    }
  }

  function sanitizeProjects(items) {
    if (!Array.isArray(items)) return [];
    return items.filter((item) => item && item.id && (item.name || item.title) && item.url && (item.image || item.cover)).map((item) => ({
      ...item,
      image: safeImageUrl(item.image || item.cover),
      url: safeProjectUrl(item.url)
    })).slice(0, 18);
  }

  function applyTranslations() {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    portfolio.dataset.language = language;
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (copy[key]) element.textContent = text(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.placeholder = text(element.dataset.i18nPlaceholder);
    });
    document.querySelectorAll("[data-language-button]").forEach((button) => {
      const isActive = button.dataset.languageButton === language;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    document.querySelector("nav.desktop-nav").setAttribute("aria-label", language === "bn" ? "ডেস্কটপ নেভিগেশন" : "Desktop navigation");
    document.querySelector("nav.mobile-nav").setAttribute("aria-label", language === "bn" ? "মোবাইল নেভিগেশন" : "Mobile navigation");
    document.querySelector(".language-switch").setAttribute("aria-label", language === "bn" ? "ভাষা নির্বাচন করুন" : "Choose language");
    updateControlLabels();
    updateDirectWhatsAppLinks();
    renderProjects();
    renderHeroCarousel();
    renderAboutCollage();
  }

  function renderProjects() {
    const grid = document.getElementById("project-grid");
    grid.innerHTML = projects.map((project, index) => {
      const title = localized(project, "title");
      const category = localized(project, "category");
      return `<a class="project-card" href="${escapeHtml(safeProjectUrl(project.url))}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(title)} — ${language === "bn" ? "Behance-এ দেখুন" : "View on Behance"}">
        <figure><img class="fill-image" src="${escapeHtml(safeImageUrl(project.image))}" alt="${escapeHtml(title)} ${language === "bn" ? "প্রজেক্ট কভার" : "project cover"}" loading="lazy" decoding="async" referrerpolicy="no-referrer"/><span class="project-index">${String(index + 1).padStart(2, "0")}</span><span class="project-open">${externalIcon}</span></figure>
        <div class="project-meta"><div><p>${escapeHtml(category)}</p><h3>${escapeHtml(title)}</h3></div><span>${language === "bn" ? "Behance-এ দেখুন" : "View on Behance"}</span></div>
      </a>`;
    }).join("");
  }

  function renderAboutCollage() {
    const collage = document.getElementById("about-collage");
    const chosen = [projects[0], projects[1] || projects[0], projects[5] || projects[2] || projects[0]].filter(Boolean);
    collage.innerHTML = chosen.map((project, index) => {
      const classes = ["hero-project", index === 0 ? "hero-project-main" : "hero-project-small", index === 1 ? "hero-project-top" : "", index === 2 ? "hero-project-bottom" : ""].filter(Boolean).join(" ");
      const title = localized(project, "title");
      return `<a class="${classes}" href="${escapeHtml(safeProjectUrl(project.url))}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(title)} — ${language === "bn" ? "Behance-এ দেখুন" : "View on Behance"}"><img class="fill-image" src="${escapeHtml(safeImageUrl(project.image))}" alt="${escapeHtml(title)}" loading="lazy" decoding="async" referrerpolicy="no-referrer"/></a>`;
    }).join("");
  }

  function renderHeroCarousel() {
    const stage = document.getElementById("hero-carousel-stage");
    stage.querySelectorAll(".hero-behance-slide").forEach((slide) => slide.remove());
    projects.slice(0, 3).forEach((project, index) => {
      const title = localized(project, "title");
      const link = document.createElement("a");
      link.className = "hero-carousel-slide hero-behance-slide";
      link.dataset.slide = String(index + 1);
      link.href = safeProjectUrl(project.url);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.setAttribute("aria-label", `${title} — ${language === "bn" ? "Behance-এ দেখুন" : "View on Behance"}`);
      link.innerHTML = `<img class="fill-image" src="${escapeHtml(safeImageUrl(project.image))}" alt="${escapeHtml(title)} ${language === "bn" ? "Behance প্রজেক্ট কভার" : "Behance project cover"}" decoding="async" referrerpolicy="no-referrer"/><span class="hero-project-shade" aria-hidden="true"></span><span class="hero-slide-copy"><small>${index === 0 ? (language === "bn" ? "সর্বশেষ প্রজেক্ট" : "LATEST PROJECT") : `${language === "bn" ? "সাম্প্রতিক প্রজেক্ট" : "RECENT PROJECT"} / 0${index + 1}`}</small><strong>${escapeHtml(title)}</strong><span>${language === "bn" ? "Behance-এ দেখুন" : "View on Behance"} ${externalIcon}</span></span>`;
      stage.appendChild(link);
    });

    heroSlide = 0;
    const dots = document.getElementById("hero-carousel-dots");
    dots.innerHTML = "";
    stage.querySelectorAll(".hero-carousel-slide").forEach((_slide, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-label", `${language === "bn" ? "স্লাইড" : "Slide"} ${index + 1}`);
      button.addEventListener("click", () => {
        setHeroSlide(index);
        restartCarousel();
      });
      dots.appendChild(button);
    });
    setHeroSlide(0);
    restartCarousel();
  }

  function setHeroSlide(index) {
    const slides = Array.from(document.querySelectorAll(".hero-carousel-slide"));
    if (!slides.length) return;
    heroSlide = ((index % slides.length) + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === heroSlide;
      slide.classList.toggle("active", active);
      slide.setAttribute("aria-hidden", String(!active));
      if (slide.matches("a")) slide.tabIndex = active ? 0 : -1;
    });
    document.querySelectorAll(".hero-carousel-dots button").forEach((button, dotIndex) => {
      const active = dotIndex === heroSlide;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    document.querySelectorAll(".poster-glow").forEach((glow) => { glow.hidden = heroSlide !== 0; });
  }

  function restartCarousel() {
    window.clearInterval(carouselTimer);
    carouselTimer = null;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const slideCount = document.querySelectorAll(".hero-carousel-slide").length;
    if (!carouselPaused && !reduceMotion && slideCount > 1) {
      carouselTimer = window.setInterval(() => setHeroSlide(heroSlide + 1), CAROUSEL_INTERVAL);
    }
  }

  function setMenu(open) {
    menuButton.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? (language === "bn" ? "মেনু বন্ধ করুন" : "Close menu") : (language === "bn" ? "মেনু খুলুন" : "Open menu"));
    mobileNav.classList.toggle("open", open);
    mobileNav.setAttribute("aria-hidden", String(!open));
    mobileNav.querySelectorAll("a").forEach((link) => { link.tabIndex = open ? 0 : -1; });
  }

  function setChat(open) {
    chatOpen = open;
    chatPanel.classList.toggle("open", open);
    chatPanel.setAttribute("aria-hidden", String(!open));
    chatLauncher.classList.toggle("active", open);
    chatLauncher.setAttribute("aria-expanded", String(open));
    chatLauncher.querySelector(".launcher-whatsapp-icon").hidden = open;
    chatLauncher.querySelector(".launcher-close-icon").hidden = !open;
    chatPanel.querySelectorAll("input, textarea, button").forEach((control) => { control.tabIndex = open ? 0 : -1; });
    if (open) {
      chatPrompt.hidden = true;
      window.setTimeout(() => document.getElementById("chat-name").focus(), 60);
    }
    updateControlLabels();
    updateBackToTop();
  }

  function updateControlLabels() {
    const menuOpen = menuButton.classList.contains("open");
    menuButton.setAttribute("aria-label", menuOpen ? (language === "bn" ? "মেনু বন্ধ করুন" : "Close menu") : (language === "bn" ? "মেনু খুলুন" : "Open menu"));
    const chatLabel = chatOpen ? (language === "bn" ? "WhatsApp ফর্ম বন্ধ করুন" : "Close WhatsApp form") : (language === "bn" ? "WhatsApp যোগাযোগ ফর্ম খুলুন" : "Open WhatsApp inquiry form");
    chatLauncher.setAttribute("aria-label", chatLabel);
    chatLauncher.title = chatLabel;
    chatPanel.querySelector(".chat-close").setAttribute("aria-label", language === "bn" ? "WhatsApp ফর্ম বন্ধ করুন" : "Close WhatsApp form");
    backToTop.setAttribute("aria-label", language === "bn" ? "উপরে ফিরে যান" : "Back to top");
    backToTop.title = language === "bn" ? "উপরে ফিরে যান" : "Back to top";
    chatPrompt.querySelector(".prompt-close").setAttribute("aria-label", language === "bn" ? "যোগাযোগের মেসেজ বন্ধ করুন" : "Dismiss contact message");
  }

  function updateDirectWhatsAppLinks() {
    const message = "Hello Sajid, I’d like to discuss a social media ad or campaign design project with you.\n\nহ্যালো সাজিদ, আমি একটি সোশ্যাল মিডিয়া অ্যাড বা ক্যাম্পেইন ডিজাইন প্রজেক্ট নিয়ে আলোচনা করতে চাই।";
    document.querySelectorAll("[data-whatsapp-direct]").forEach((link) => { link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`; });
  }

  function submitWhatsAppForm(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const inquiry = `Hello Sajid, I would like to discuss a design project.\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nহ্যালো সাজিদ, আমি একটি ডিজাইন প্রজেক্ট নিয়ে আলোচনা করতে চাই।`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(inquiry)}`, "_blank", "noopener,noreferrer");
    setChat(false);
  }

  function updateBackToTop() {
    backToTop.classList.toggle("visible", window.scrollY > 640 && !chatOpen);
  }

  async function loadProjects() {
    try {
      const response = await fetch(`data/projects.json?v=${Date.now()}`, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Project data unavailable");
      const payload = await response.json();
      const synced = sanitizeProjects(payload.projects);
      if (synced.length) projects = synced;
    } catch (_error) {
      projects = fallbackProjects.slice();
    }
    renderProjects();
    renderHeroCarousel();
    renderAboutCollage();
  }

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.languageButton === "bn" ? "bn" : "en";
      applyTranslations();
    });
  });
  menuButton.addEventListener("click", () => setMenu(!menuButton.classList.contains("open")));
  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.querySelectorAll(".whatsapp-form").forEach((form) => form.addEventListener("submit", submitWhatsAppForm));
  chatLauncher.addEventListener("click", () => setChat(!chatOpen));
  chatPanel.querySelector(".chat-close").addEventListener("click", () => setChat(false));
  chatPrompt.querySelector(".prompt-message").addEventListener("click", () => setChat(true));
  chatPrompt.querySelector(".prompt-close").addEventListener("click", () => { chatPrompt.hidden = true; });
  backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  window.addEventListener("scroll", updateBackToTop, { passive: true });
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
      setChat(false);
    }
  });
  heroPoster.addEventListener("mouseenter", () => { carouselPaused = true; restartCarousel(); });
  heroPoster.addEventListener("mouseleave", () => { carouselPaused = false; restartCarousel(); });
  heroPoster.addEventListener("focusin", () => { carouselPaused = true; restartCarousel(); });
  heroPoster.addEventListener("focusout", () => { carouselPaused = false; restartCarousel(); });

  document.getElementById("current-year").textContent = String(new Date().getFullYear());
  setMenu(false);
  applyTranslations();
  loadProjects();
})();
