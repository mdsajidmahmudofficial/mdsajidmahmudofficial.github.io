# MD Sajid Mahmud — Portfolio

MD Sajid Mahmud-এর dark, bilingual (English + বাংলা), responsive single-page graphic-design portfolio। এটি সরাসরি GitHub Pages-এ চালানোর জন্য তৈরি; কোনো paid hosting, database বা build command প্রয়োজন নেই।

## দ্রুত প্রকাশ করুন

1. ZIP extract করুন।
2. GitHub-এ একটি **Public repository** তৈরি করুন।
3. extract করা folder-এর ভেতরের **সব file ও folder** repository-র root-এ upload করুন। ZIP file-টি সরাসরি upload করবেন না।
4. Repository-তে যান: **Settings → Pages**।
5. **Build and deployment → Source** থেকে **Deploy from a branch** নির্বাচন করুন।
6. Branch হিসেবে **main**, folder হিসেবে **/(root)** নির্বাচন করে **Save** চাপুন।
7. সাধারণত ১–৫ মিনিটের মধ্যে GitHub আপনার live URL দেখাবে।

Behance auto-update চালু করার সম্পূর্ণ নির্দেশনা: [DEPLOYMENT-GUIDE-BN.md](DEPLOYMENT-GUIDE-BN.md)

## কী কী রয়েছে

- responsive dark-only premium portfolio UI
- English default এবং Hind Siliguri-সহ বাংলা language switch
- hero artwork + সর্বশেষ ৩টি Behance project-এর auto carousel
- প্রতিটি project thumbnail থেকে exact Behance project link
- services, tools, about, process, work ও contact section
- contact section ও floating popup—দুই জায়গা থেকেই prefilled WhatsApp inquiry
- back-to-top button, mobile navigation, keyboard focus ও reduced-motion support
- GitHub Actions দিয়ে প্রতি ৬ ঘণ্টায় Behance project ও cover sync
- locally stored fallback cover—Behance সাময়িকভাবে unavailable হলেও site ফাঁকা হবে না

## File structure

```text
.
├── index.html                    # সম্পূর্ণ website markup
├── style.css                    # সমস্ত responsive styling ও animation
├── script.js                    # language, carousel, menu, WhatsApp ও project rendering
├── data/projects.json           # বর্তমানে website-এ দেখানো Behance projects
├── assets/portfolio/            # hero, profile ও fallback project images
├── scripts/sync-behance.mjs     # Behance থেকে project/cover সংগ্রহ করে
├── .github/workflows/
│   └── update-behance.yml       # প্রতি ৬ ঘণ্টায় automatic sync
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── 404.html
├── .nojekyll
└── DEPLOYMENT-GUIDE-BN.md
```

## Local preview

VS Code ব্যবহার করলে folder খুলে **Live Server** চালান। অথবা terminal-এ:

```bash
python3 -m http.server 8080
```

তারপর `http://localhost:8080` খুলুন। `index.html` double-click করলেও built-in fallback data দিয়ে site চলবে, তবে local server দিয়ে পরীক্ষা করাই উত্তম।

## সহজ customization

- WhatsApp number: `script.js`-এর `WHATSAPP_NUMBER`
- Behance profile: `script.js` ও `scripts/sync-behance.mjs`-এর profile URL
- লেখা/অনুবাদ: `script.js`-এর `copy` object
- রঙ/spacing: `style.css`-এর প্রথম `:root` block
- initial project data: `data/projects.json`

## গুরুত্বপূর্ণ

- repository-তে source code public থাকবে; visitor website ব্যবহার করলে repository edit বা private account access পাবে না।
- contact form কোনো database-এ তথ্য সংরক্ষণ করে না; submit করলে encoded message-সহ WhatsApp chat খুলে দেয়।
- Behance markup ভবিষ্যতে বদলে গেলে auto-sync workflow ব্যর্থ হতে পারে, কিন্তু সর্বশেষ সফল `projects.json` ও local covers-এর কারণে live site সচল থাকবে।

© MD Sajid Mahmud. All rights reserved.
