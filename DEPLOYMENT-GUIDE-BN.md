# GitHub Pages-এ প্রকাশের A–Z বাংলা গাইড

এই package-টি static HTML/CSS/JavaScript। তাই GitHub-এর বিনামূল্যের Pages hosting-এ প্রকাশ করা যাবে এবং card/WhatsApp/carousel/language switch-এর জন্য server কিনতে হবে না।

## ১. ZIP প্রস্তুত করা

1. download করা ZIP extract করুন।
2. extract করার পর `md-sajid-mahmud-github-pages` folder খুলুন।
3. `index.html`, `style.css`, `script.js`, `assets`, `data`, `.github`—সবকিছু একই structure-এ থাকতে হবে।
4. কিছু operating system hidden folder লুকিয়ে রাখে। `.github` folder যেন upload থেকে বাদ না যায়, তা নিশ্চিত করুন।

## ২. GitHub repository তৈরি

1. [github.com](https://github.com/) খুলে sign in করুন।
2. উপরে **+ → New repository** চাপুন।
3. Repository name দিন, যেমন `md-sajid-mahmud-portfolio`।
4. **Public** নির্বাচন করুন। GitHub Pages free ব্যবহারের জন্য এটি সবচেয়ে সহজ।
5. **Add a README**, `.gitignore` বা license নির্বাচন না করে **Create repository** চাপুন—কারণ package-এ README আগে থেকেই আছে।

## ৩A. Browser দিয়ে file upload

1. নতুন repository-তে **uploading an existing file** অথবা **Add file → Upload files** চাপুন।
2. extract করা folder-এর ভিতরের সব file/folder drag-and-drop করুন। বাইরের folder-টি নয়—তার **ভেতরের contents** দিন।
3. upload তালিকায় `.github/workflows/update-behance.yml` আছে কি না দেখুন।
4. নিচে commit message লিখুন: `Initial portfolio website`।
5. **Commit changes** চাপুন।

## ৩B. Git command দিয়ে upload (ঐচ্ছিক)

Folder-এর terminal খুলে নিচের command চালান। `YOUR-USERNAME` ও repository URL নিজেরটি দিয়ে বদলাবেন।

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/md-sajid-mahmud-portfolio.git
git push -u origin main
```

## ৪. বিনামূল্যে GitHub Pages চালু করা

1. Repository-র **Settings** খুলুন।
2. বাম পাশ থেকে **Pages** নির্বাচন করুন।
3. **Build and deployment** অংশে Source হিসেবে **Deploy from a branch** রাখুন।
4. Branch: **main**। Folder: **/(root)**।
5. **Save** চাপুন।
6. কিছু সময় পর একই জায়গায় live link দেখাবে। সাধারণত URL হবে:

```text
https://YOUR-USERNAME.github.io/md-sajid-mahmud-portfolio/
```

প্রথম প্রকাশে ১–৫ মিনিট সময় লাগতে পারে। Repository-র **Actions** tab-এ `pages build and deployment` শেষ হয়েছে কি না দেখা যায়।

## ৫. Behance automatic update চালু করা

Website GitHub Pages-এ server API চালাতে পারে না। তাই included GitHub Actions workflow Behance profile পরীক্ষা করে project data ও cover repository-তে update করে।

1. Repository-তে **Settings → Actions → General** খুলুন।
2. নিচের **Workflow permissions** অংশে **Read and write permissions** নির্বাচন করুন।
3. **Save** চাপুন।
4. Repository-র **Actions** tab খুলুন।
5. বাম পাশে **Update Behance projects** নির্বাচন করুন।
6. **Run workflow → Run workflow** চাপুন।
7. সবুজ check mark এলে প্রথম sync সফল। এরপর workflow প্রতি ৬ ঘণ্টায় নিজে চলবে।

নতুন Behance project upload করার পর সর্বোচ্চ প্রায় ৬ ঘণ্টার মধ্যে website-এ আসবে। তাড়াতাড়ি আনতে চাইলে আবার **Run workflow** চাপুন। Hero carousel সর্বশেষ ৩টি project নেয়; Selected Work section সর্বশেষ ১৮টি পর্যন্ত দেখায়।

### Auto-update ব্যর্থ হলে

- Actions log-এ `Behance sync failed` দেখলে Behance সাময়িকভাবে request block করে থাকতে পারে; পরে **Re-run jobs** দিন।
- repository বা organization যদি workflow write বন্ধ করে রাখে, Workflow permissions ঠিক করুন।
- `main` branch protected হলে bot commit বাধা পেতে পারে; Actions bot-এর write অনুমতি দিন অথবা manual sync ব্যবহার করুন।
- GitHub দীর্ঘদিন repository activity না পেলে scheduled workflow pause করতে পারে। Actions tab থেকে workflow re-enable/run করলে আবার শুরু হবে।
- sync ব্যর্থ হলেও existing `data/projects.json` ও local covers দিয়ে website আগের মতো চলবে।

## ৬. Manual Behance sync (ঐচ্ছিক)

Node.js 20+ install থাকলে repository folder-এ চালান:

```bash
npm run sync:behance
git add data/projects.json assets/portfolio/behance
git commit -m "Update Behance projects"
git push
```

## ৭. Live site update করা

যে file পরিবর্তন করবেন, repository-তে commit/push করলেই GitHub Pages আবার deploy করবে। সাধারণ পরিবর্তন:

| প্রয়োজন | File/স্থান |
|---|---|
| English/Bangla লেখা | `script.js` → `copy` |
| WhatsApp number | `script.js` → `WHATSAPP_NUMBER` |
| Behance username | `script.js` ও `scripts/sync-behance.mjs` |
| রঙ/spacing/animation | `style.css` |
| Hero/profile images | `assets/portfolio/` এবং সংশ্লিষ্ট HTML path |
| Metadata/title | `index.html`-এর `<head>` |

## ৮. Custom domain (ঐচ্ছিক)

GitHub-এর দেওয়া `.github.io` domain সম্পূর্ণ বিনামূল্যে। নিজের domain পরে কিনলে **Settings → Pages → Custom domain** থেকে যুক্ত করা যায়। এখন প্রয়োজন নেই।

## ৯. Share করার আগে checklist

- desktop ও mobile-এ live URL খুলুন
- EN/বাংলা switch পরীক্ষা করুন
- mobile menu ও সব anchor পরীক্ষা করুন
- hero carousel-এর project card click করুন
- Selected Work-এর প্রতিটি link exact Behance project খোলে কি না দেখুন
- contact form ও floating WhatsApp form submit করে নিজের number খোলে কি না দেখুন
- Actions-এর Behance sync একবার manual run করুন
- incognito/private window থেকে খুলে নিশ্চিত করুন public visitor শুধু site দেখছে

## ১০. নিরাপত্তা ও privacy

- visitor website দেখলে আপনার GitHub password, WhatsApp account, computer file বা repository edit permission পায় না।
- public repository হলে source code ও publicly included image দেখা/download করা যায়—এটি normal static website behavior।
- form data কোনো server/database-এ জমা হয় না; browser সরাসরি WhatsApp URL তৈরি করে।
- repository-তে কোনো password, API key, private email বা secret file যোগ করবেন না।

এখন package-এর files repository root-এ upload, Pages enable এবং Actions write permission দিলেই সম্পূর্ণ site live হবে।
