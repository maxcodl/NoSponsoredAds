# Ad Blocker Chrome Extension

This is a simple Chrome extension that blocks Google-sponsored ads on web pages. The extension uses a toggle switch, allowing you to turn the ad blocker on or off as needed. 

## Features
- Blocks ads from popular Google ad services like:
  - `google.com`
  - `doubleclick.net`
  - `googlesyndication.com`
- Removes elements with the following classes:
  - `div.cu-container`
  - `div.qGXjvb`
- Toggle switch to enable or disable the ad blocker.
- Modern and responsive UI.

## Installation (for Chromium-based browsers)

1. **Download the Extension:**
   - Download or clone the project and unzip the folder to your preferred location.

2. **Install the Extension:**
   1. Open your Chromium-based browser (Chrome, Brave, Edge, etc.).
   2. Go to the Extensions tab by visiting: `chrome://extensions/`.
   3. Enable **Developer Mode** using the toggle at the top-right of the page.
   4. Click on **"Load unpacked"**.
   5. Select the folder where you unzipped the extension.

3. **Activate the Extension:**
   - Once installed, the ad blocker will appear in the extensions bar.
   - Click the icon to access the toggle switch and enable or disable ad blocking.

## How It Works
- **Ad Blocking**: The extension removes sponsored ads by matching specific URL patterns or DOM elements with known ad-related classes.
- **User Control**: Use the toggle switch in the extension popup to turn ad blocking on or off.
- **Auto Refresh**: When the toggle is switched, the page automatically refreshes to apply or remove ad blocking.

## Screenshots
![UI Screenshot](./screenshots/ui_example.png)

---

Enjoy browsing ad-free with this simple and effective ad blocker!
