# ![](./icons/48.png) SafeSearch Lock
Chromium and Firefox extension for locking safesearch feature on popular search engines, including Google, Bing and DuckDuckGo

-----

<p align="center">
<a href="https://chrome.google.com/webstore/detail/lbalficemhpnfbgifnidmhmephnlgonb"><img src="https://developer.chrome.com/static/docs/webstore/branding/image/UV4C4ybeBTsZt43U4xis.png" alt="Firefox"></a>
<a href="https://addons.mozilla.org/addon/safesearch-lock/"><img src="https://blog.mozilla.org/addons/files/2015/11/get-the-addon.png" alt="Firefox"></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/igfjbkihgkbnnmhdbhhgpodpamfjdaki"><img src="https://learn.microsoft.com/en-us/microsoft-edge/extensions/publish/add-ons-badge-images/microsoft-edge-add-ons-badge.png" alt="Microsoft Edge"></a>
</p>


## Contents
- [Supported Search Engines](#installation)
- [Installation](#installation)
- [How to use this extension?](#how-to-use-this-extension)
- [How this extension work?](#how-this-extension-work)
- [Development](#development)
  - [Prerequisites](#prerequisites)
  - [Getting started](#getting-started)
- [Privacy policy](#privacy-policy)
- [License](#license)

-----

![](./assets/img1.png)
![](./assets/img2.png)
![](./assets/img3.png)

-----

# Supported Search Engines
- Google
- Bing
- Brave Search
- Startpage
- DuckDuckGo
- Yahoo
- Qwant
- Pixabay
- Yandex

# Installation

1. Chromium-based Browser (Google Chrome, Opera, Brave, Vivaldi, Arc, etc.) - [Chrome Web Store](https://chrome.google.com/webstore/detail/lbalficemhpnfbgifnidmhmephnlgonb)
2. Firefox - [Mozilla Add-ons](https://addons.mozilla.org/addon/safesearch-lock-for-youtube/)
3. Microsoft Edge - [Microsoft Edge Addons](https://microsoftedge.microsoft.com/addons/detail/igfjbkihgkbnnmhdbhhgpodpamfjdaki)
4. GitHub Releases - [Download from releases](https://github.com/arfshl/safesearch-lock/releases/latest), enable "Developer Mode" options, and install from "Load Unpacked" options

# How to use this extension?

Just install the extension, or deploy it if you are an administrator. The extension will take effect once you installed it

[How to Deploy extension on Chrome](https://chromeenterprise.google/policies/extension-install-forcelist/)

[How to Deploy extension on Firefox](https://support.mozilla.org/en-US/kb/deploying-firefox-with-extensions)

# How this extension work?
This extension uses `declarativeNetRequest` API and its slatic rules to intercept the search queries and adds those URL paramaters (for example safe=strict on www.google.com) or redirects the search queries to the search engine's safe search domains (for example safe.duckduckgo.com on duckduckgo.com) to enforce the safe search feature.

# Development
### Prequisites
1. `zip` and `unzip`
2. `imagemagick` and `inkscape` for generating and/or resizing icons and screenshots (optional)
3. Chromium-based and Firefox-based browser for testing

### Getting started
1. Clone the Repository
```bash
git clone https://github.com/arfshl/safesearch-lock.git
cd safesearch-lock
```

2. Build the extension
```bash
bash build.sh
```

# Privacy Policy
This extension doesn't use any external services to operate, all functionality are running locally inside your browser, no data is sent or collected by me as developer.

In order to operate, this extension need access to:

1. "Block content on any page" - `declarativeNetRequest` API: For adding URL paramaters and/or redirecting the search queries to the safesearch domains to enforce the safesearch feature.

# License
[GPLv3](https://github.com/arfshl/safesearch-lock/blob/main/LICENSE)
