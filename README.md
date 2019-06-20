<h1 align="center">Welcome to <a href="https://github.com/illvart/aboutme" title="Repository">aboutme</a> 👋</h1>
<p align="center">
aboutme – Your personal homepage running on <strong>Node.js</strong> ⚡️
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/illvart-aboutme/deploys" title="Netlify">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/70385d31-12e1-4f15-9370-f49d78870f3b/deploy-status" />
  </a>
  <a href="https://david-dm.org/illvart/aboutme" title="Watch Dependency">
    <img alt="Dependency Status" src="https://david-dm.org/illvart/aboutme/status.svg" />
  </a>
  <a href="https://david-dm.org/illvart/aboutme?type=dev" title="Watch devDependency">
    <img alt="devDependency Status" src="https://david-dm.org/illvart/aboutme/dev-status.svg" />
  </a>
  <a href="https://github.com/thedaviddias/Front-End-Checklist" title="Front-End Checklist">
    <img alt="Front‑End_Checklist followed" src="https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg" />
  </a>
  <a href="#-license" title="License">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
  <a href="https://twitter.com/illvart" title="Follow me on Twitter">
    <img alt="Twitter: illvart" src="https://img.shields.io/twitter/follow/illvart.svg?style=social" />
  </a>
</p>

---

**aboutme** is a template that you can use to put information about yourself on the internet. Basically, on the user interface doesn't use ~~JavaScript~~, only CSS! But support **Progressive Web Apps (PWA)** with [Workbox](https://github.com/GoogleChrome/workbox).

![Screenshot](https://cdn.staticaly.com/screenshot/illvart-aboutme.netlify.com?fullPage=true)

## 🙏 Note
This project work in progress. The next version I will include **Node.js** packages like a **Gulp** to optimize development and production. Soon! 🙇‍♂️

## 📑 Documentation
If you want to use and configure this template, please read the [documentation](doc/configurations.md).

### Clone
Clone this repository and customization it:

```bash
git clone https://github.com/illvart/aboutme.git
```

### Install Packages
Install the packages required:

```bash
yarn install
```

### Development
Running locally using [http-server](https://github.com/indexzero/http-server):

```bash
yarn dev
```

### PWA
After editing the code and adding something, then inject manifest:

```bash
yarn inject-manifest
```

### Deploy
Default deploy command for **GitHub Pages**.<br>
You can also use **Netlify**, and this automatically pointing to the **static** directory.

```bash
yarn deploy
```

Note: Create a new branch with the name **gh-pages**, then deploy static directory to the gh-pages branch.

### Testing
You can test netlify headers including security, cache, etc:

- [Security Headers](https://securityheaders.com/?q=https://illvart-aboutme.netlify.com&followRedirects=on)
- [webhint](https://webhint.io/scanner/572b907a-c552-48d0-a86b-f4a7515829e4)

## 🤝 Contributing
Contributions, issues and feature requests are welcome.<br>
Feel free to check [issues page](https://github.com/illvart/aboutme/issues) if you want to contribute.

## ❤️ Show your support
Give a ⭐️ this repository if this project helped you!

<a href="https://www.patreon.com/illvart" title="Become a Patron">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>

## 📝 License
Except as otherwise noted, this work is licensed under a [MIT License](LICENSE).

---

Copyright © 2019 [MNF (illvart)](https://github.com/illvart). All Rights Reserved.
