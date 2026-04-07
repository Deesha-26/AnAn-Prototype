# 安安 An An — Chinatown Safety Guardian

**Volunteer Network Prototype** — An interactive walkthrough showing how the An An door knock network recruits, trains, operates, and activates during emergencies to reach isolated elderly Mandarin-speaking residents in Chinatown.

## 🚀 Quick Start (Run Locally)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

Opens at `http://localhost:3000`

## 🌐 Deploy to GitHub Pages

### Option A: Using gh-pages package (easiest)

```bash
# 1. Update "homepage" in package.json with your GitHub Pages URL:
#    "homepage": "https://YOUR-USERNAME.github.io/anan-prototype"

# 2. Install dependencies
npm install

# 3. Deploy
npm run deploy
```

Your site will be live at `https://YOUR-USERNAME.github.io/anan-prototype`

### Option B: Manual deployment

```bash
# 1. Build the project
npm run build

# 2. The 'build' folder contains the static site
# 3. Push the contents of 'build' to a 'gh-pages' branch
```

### Option C: GitHub Actions (auto-deploy on push)

1. Go to your repo → Settings → Pages
2. Set Source to "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## 📁 Project Structure

```
anan-prototype/
├── public/
│   └── index.html        # HTML shell
├── src/
│   ├── index.js           # React entry point
│   └── App.js             # Main prototype component
├── package.json
└── README.md
```

## 📋 What the Prototype Shows

1. **Recruit** — Where to find bilingual volunteers, recruitment channels, territory assignments
2. **Train** — Onboarding program, monthly meeting structure, quarterly emergency drills
3. **Operate** — Year-round trust-building visits, An An brand tools, coordinator oversight
4. **Activate** — Emergency chain from alert to dispatch to door knocks to status reporting

## 🐼 About An An

An An (安安) is a community-born mascot that serves as the trusted, non-governmental face of a volunteer door knock network serving elderly Mandarin-speaking residents in NYC's Chinatown during disasters.

**Zero smartphones • Zero internet • Zero English • Building trust through familiarity**
