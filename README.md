# ML Student Portfolio Template

A plug-and-play portfolio website template for **AI4ALL machine learning students**.
No frameworks, no build tools — just HTML, CSS, and a little JavaScript. Fork it,
fill in your info, and publish it for free with GitHub Pages.

**[See a finished example →](../../tree/jane-doe-demo)** (the `jane-doe-demo`
branch shows the template filled in for a sample student, Jane Doe)

---

## Getting Started (3 steps)

### 1. Fork this repository

Click the **Fork** button at the top-right of this page. This creates your own
copy of the template under your GitHub account.

> **Tip:** If you name your fork `your-username.github.io`, your site will
> live at that exact URL.

### 2. Make it yours

All of your content lives in **one file: `index.html`**. Open it and look for
the numbered edit markers — just work through them in order:

| Marker | What to change |
|--------|----------------|
| EDIT #1 | Page title (browser tab text) |
| EDIT #2 | Your name in the navigation bar |
| EDIT #3 | Hero section — your name + intro sentence |
| EDIT #4 | About Me — your initials/photo, bio, quick facts |
| EDIT #5 | Your skills (add/remove `<li>` chips) |
| EDIT #6 | Your ML projects (3 cards — the important part!) |
| EDIT #7 | Your journey/education timeline |
| EDIT #8 | Contact — email, GitHub, LinkedIn |
| EDIT #9 | Footer — your name |
| EDIT #10 | The "typing" phrases (this one is in `js/script.js`) |

You can edit right in the browser (press `.` on your repo page to open the
GitHub web editor) or clone the repo and use VS Code:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-FORK-NAME.git
```

To preview locally, just double-click `index.html` — it opens in your browser.
No server needed.

### 3. Publish with GitHub Pages (free)

1. In your fork, go to **Settings → Pages**
2. Under "Branch", select **`main`** and folder **`/ (root)`**, then **Save**
3. Wait a minute or two — your portfolio is live at
   `https://your-username.github.io/your-fork-name/`

Every time you push a change to `main`, the site updates automatically.

---

## What's in this repo

```
├── index.html      ← ALL your content lives here (start here!)
├── css/
│   └── style.css   ← Colors & styling (optional: change the palette at the top)
├── js/
│   └── script.js   ← Typing effect + menu (optional: EDIT #10 is here)
└── assets/         ← Drop your photo / images in here
```

## Customizing further (optional)

- **Colors:** open `css/style.css` — the color palette is defined in variables
  at the very top of the file. Change `--accent` and watch the whole site update.
- **Add a photo:** put an image in `assets/`, then follow the "OPTION B"
  comment in the About section of `index.html`.
- **More projects:** copy one whole `<article class="project-card">...</article>`
  block in `index.html` and paste it below the last one.

## Portfolio checklist

Before you share your link, make sure:

- [ ] No "Your Name" or placeholder text left anywhere (Ctrl+F for "Your" to check!)
- [ ] Every project card has a real dataset, model, and result
- [ ] Project links actually point to your GitHub repos / Colab notebooks
- [ ] Your email and social links work
- [ ] It looks good on your phone too

## Need help?

- Ask your AI4ALL instructor or TA
- [GitHub's guide to forking](https://docs.github.com/en/get-started/quickstart/fork-a-repo)
- [GitHub Pages docs](https://docs.github.com/en/pages/quickstart)

Happy building!
