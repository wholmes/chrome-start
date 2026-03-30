# Chrome Start (Start Page)

**Chrome Start** is a Chrome extension by **Whittfield Holmes** that replaces the new tab with a minimal, customizable start page—clock, search, grouped shortcuts, local notes, weather-driven visuals, optional weather animations, and a background slideshow with Unsplash integration.

## Author & copyright

- **Product name:** Chrome Start  
- **Author:** Whittfield Holmes  
- **Copyright:** © 2025 Whittfield Holmes (the in-app footer shows the current year automatically)  
- **Repository:** [github.com/wholmes/chrome-start](https://github.com/wholmes/chrome-start)

Source files (`newtab.html`, `newtab.css`, `newtab.js`) include matching copyright headers under the MIT License.

## Features

- **Clock & greeting** — Live time and contextual greeting (Good morning / afternoon / evening)
- **Weather** — Current conditions and temperature (°F) from your location; the background orb and accent colors change with the weather (clear, cloudy, rain, snow, storm, etc.)
- **Weather animations** — Optional particle-style effects for current conditions (rain, snow, storm lightning + rain, fog, soft clear-sky glow, drifting clouds), with a toggle in the lower-left corner
- **Background slideshow** — Smooth transitions (fade, crossfade, zoom, slide, blur); upload your own images or browse Unsplash photos
- **Unsplash integration** — Search and browse photos in the extension; automatic photographer and photo-page credits
- **Dynamic text color** — Text adjusts (light/dark) based on background brightness for readability
- **Search** — Web search with your choice of engine (Google, DuckDuckGo, Bing, Brave Search)
- **Shortcuts** — Custom links with optional SVG icons and accent colors
- **Groups** — Organize shortcuts into sections; add, rename, reorder, or delete groups
- **Reorder** — Drag-and-drop shortcuts within and between groups; move groups with ▲ ▼
- **Themes** — Dark, light, or follow system preference
- **Notes** — Quick notes saved locally with collapse/expand toggle
- **Backup & restore** — Export and import shortcuts, groups, notes, and settings as JSON

All data is stored locally in the extension and persists across browser restarts and extension updates.

## Installation

1. **Clone the repo**
   ```bash
   git clone git@github.com:wholmes/chrome-start.git
   cd chrome-start
   ```

2. **Load the extension in Chrome**
   - Open `chrome://extensions`
   - Turn on **Developer mode** (top right)
   - Click **Load unpacked**
   - Select the folder that contains `manifest.json`  
     From the repo root, that folder is **this repository’s root** (the same directory as `README.md` and `manifest.json`).

3. Open a **new tab** to use Chrome Start.

## Usage

| Action | How |
|--------|-----|
| **Search** | Type in the search box and press Enter. |
| **Search engine** | Use the "Search with" dropdown under the search bar. |
| **Theme** | Use the "Theme" dropdown (System / Light / Dark). |
| **Weather** | Allow location when prompted; conditions and temperature (°F) appear with the clock and drive the orb/accent colors. Cached for 30 minutes. |
| **Weather animations** | Use the **Weather animations** toggle (lower-left) to turn effects on or off. |
| **Add shortcut** | Click "Add shortcut" or the "+" on a group header; set name, URL, optional SVG icon and color. |
| **Edit shortcut** | Hover a shortcut and click the pencil icon. |
| **Reorder shortcuts** | Drag a shortcut to another position or into another group. |
| **Groups** | "Add group" to create a section; use the pencil to rename, ▲ ▼ to reorder, "+" to add a shortcut to that group. |
| **Notes** | Type in the Notes area; content auto-saves locally. Click the chevron (▼) next to "Notes" to collapse/expand. |
| **Background slideshow** | Click **Background** (top-right) → **Upload** for local images, or **Unsplash** to browse photos. Configure transition style, duration, and speed. |
| **Unsplash photos** | **Background** → **Unsplash** → enter your API key (see below) → search and add photos. Credits appear automatically. |
| **Backup** | **Backup** downloads JSON (shortcuts, groups, notes, settings). **Restore** loads a backup file. |

## Background slideshow

Add multiple background images that cycle automatically with smooth transitions. Images can be uploaded from your computer or added from Unsplash.

### Upload images

1. Click **Background** (top-right, next to Logo)
2. Click **Upload** and select one or more images
3. Choose your transition style (fade, crossfade, zoom, slide, blur)
4. Set duration (how long each image shows) and transition speed
5. Click **Save** — images appear immediately

### Unsplash integration

Browse and add photos from Unsplash's free photo library:

1. Get a free Unsplash API key:
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Sign up (free, no credit card required)
   - Create a new application
   - Copy your **Access Key**

2. Add your API key:
   - Click **Background** → **Unsplash**
   - Paste your API key and click **Save**

3. Browse photos:
   - Search for keywords (e.g., "nature", "mountains", "city")
   - Or leave search empty for random photos
   - Click any photo (or the + button) to add it to your slideshow

4. Photo credits:
   - Credits appear automatically in the bottom-right corner
   - Links go to the photographer and the photo page on Unsplash
   - Follows Unsplash attribution expectations

### Dynamic text color

Text color (black or white) adjusts based on background image brightness for readability. Light images favor dark text; dark images favor light text.

## Privacy

The extension stores data locally. Optional network use: **Open-Meteo** (weather) and **Unsplash** (when you use that feature with your own API key).

For Chrome Web Store listings and similar, a standalone privacy policy is maintained here:  
[Privacy policy (chrome-start-extension)](https://github.com/wholmes/chrome-start-extension/blob/main/PRIVACY_POLICY.md)

## License

MIT License

Copyright (c) 2025 Whittfield Holmes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
