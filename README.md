# [aboutme](https://github.com/illvart/aboutme)

> About Me – Your personal homepage running on Node.js

[![Netlify Status](https://api.netlify.com/api/v1/badges/70385d31-12e1-4f15-9370-f49d78870f3b/deploy-status)](https://app.netlify.com/sites/illvart-aboutme/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PWA: yes](https://img.shields.io/badge/PWA-yes-%235A0FC8.svg)](https://developers.google.com/web/progressive-web-apps)
[![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist)

**aboutme** is a template that you can use to put information about yourself on the internet. Basically, on the user interface doesn't use ~~JavaScript~~, only CSS! But support **Progressive Web Apps (PWA)** with [Workbox](https://github.com/GoogleChrome/workbox).

![Screenshot](https://cdn.staticaly.com/screenshot/illvart-aboutme.netlify.com?fullPage=true)

## Note
This project work in progress. The next version I will include **Node.js** packages like a **Gulp** to optimize development and production. Soon! 🙇‍♂️

## Documentation
If you want to use and configure this template, please read the [documentation](doc/configurations.md).

### Clone
Clone this repository and customization it:

```
git clone https://github.com/illvart/aboutme.git
```

### Install Packages
Install the packages required:

```
yarn install
```

### Development
Running on localhost by using [http-server](https://github.com/indexzero/http-server):

```
yarn dev
```

### PWA
After editing the code and adding something, then inject manifest:

```
yarn inject-manifest
```

### Deploy
Default deploy command for **GitHub Pages**. You can also use **Netlify**, and this automatically pointing to the **static** directory.

```
yarn deploy
```

Note: Create a new branch with the name **gh-pages**, then deploy static directory to the gh-pages branch.

### Testing
You can test netlify headers including security, cache, etc:

- [Security Headers](https://securityheaders.com/?q=https://illvart-aboutme.netlify.com&followRedirects=on)
- [webhint](https://webhint.io/scanner/572b907a-c552-48d0-a86b-f4a7515829e4)

## Credits
- [Flaticon](https://www.flaticon.com/)

## License
[MIT License](LICENSE)
