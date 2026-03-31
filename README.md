# Chrome Start (Start Page)

**Chrome Start** is a Chrome extension by **Whittfield Holmes** that replaces the new tab with a minimal, customizable start page—clock, search, grouped shortcuts (with optional nesting), local notes, weather-driven visuals, optional weather animations, and a background slideshow with Unsplash integration.

## Author & copyright

- **Product name:** Chrome Start  
- **Author:** Whittfield Holmes  
- **Copyright:** © 2025 Whittfield Holmes (the in-app footer shows the current year automatically)  
- **Repository:** [github.com/wholmes/chrome-start](https://github.com/wholmes/chrome-start)

Source files (`newtab.html`, `newtab.css`, `newtab.js`) include matching copyright headers under the MIT License.

## Features

- **Clock & greeting** — Live time, date string, and contextual greeting (Good morning / afternoon / evening)
- **Weather** — Current conditions and temperature (°F) from browser geolocation or a manual place/coordinates; the background orb and accent colors change with the weather (clear, cloudy, rain, snow, storm, etc.)
- **Weather animations** — Optional particle-style effects for current conditions (rain, snow, storm lightning + rain, fog, soft clear-sky glow, drifting clouds), with a toggle in the lower-left corner
- **Background slideshow** — Smooth transitions (fade, crossfade, zoom, slide, blur); upload your own images or browse Unsplash photos
- **Unsplash integration** — Search and browse photos in the extension; automatic photographer and photo-page credits
- **Dynamic text color** — Text adjusts (light/dark) based on background brightness for readability
- **Search** — Web search with your choice of engine (Google, DuckDuckGo, Bing, Brave Search)
- **Shortcuts** — Custom links with optional SVG icons and accent colors; **grid** or **compact list** layout
- **Shortcut filter** — Live filter by name, URL, or group; keyboard shortcuts for power use (see Usage)
- **Drag in URLs** — Drop a **link** or URL (e.g. from the address bar) onto the page to open **Add shortcut**; dropping on a group’s grid targets that group. (Browser tab drags depend on Chrome; if a tab does not drop, try the site icon/URL in the address bar.)
- **Groups** — Organize shortcuts into sections; add, rename, reorder (▲ ▼), or delete groups; **nested groups** via **Subgroup** on a top-level group
- **Reorder** — Drag-and-drop shortcuts within and between groups
- **Import** — **From open tabs** and **From bookmarks** pickers to add many shortcuts at once (uses Chrome `tabs` and `bookmarks` permissions only when you use those actions)
- **Undo** — After deleting a shortcut or a group, a short-lived undo control appears; **⌘Z / Ctrl+Z** also works while it is available
- **Page layout** — Side panel (**Layout** in the top bar) to show or hide **sections** (header, search, notes, shortcuts, footer), set **theme** (system / light / dark), and choose **weather location** (browser vs manual city or lat/lon). When the header is hidden, a **floating Layout** control opens the same panel
- **Custom logo** — Optional SVG/logo in the header (**Logo** in the top bar)
- **Onboarding** — First-run tips on the page; one-time welcome note inside the layout panel; **Show quick tips on the page** in the layout panel to surface tips again
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
| **Search engine** | Use the "Search with" dropdown under the search bar (or the same control is reflected in layout settings where applicable). |
| **Page layout & theme** | **Layout** (top bar) opens the side panel: toggle **sections**, choose **theme**, set **weather** location (browser or manual + **Apply**). |
| **Layout when header is off** | If you hide the header section, use the round **Layout** control (lower area) to open the same panel. |
| **Weather** | Allow location when prompted, or set a manual place in **Layout** → **Weather** → **Location** → **Manual**. Conditions and temperature (°F) appear with the clock and drive the orb/accent colors. Cached for 30 minutes. |
| **Weather animations** | Use the **Weather animations** toggle (lower-left) to turn effects on or off. |
| **Shortcuts: grid vs list** | Use **Grid** / **List** above the shortcut groups. |
| **Filter shortcuts** | Type in the filter field; press **`/`** to focus it. |
| **Open shortcuts from keyboard** | With the filter *not* focused in a text field, **`1`–`9`** open the first nine visible shortcut links in order. **`[`** / **`]`** move focus between groups. |
| **Add shortcut** | **Add shortcut**, or **+** on a group header; or **drop** a link/URL onto the page (see Features). |
| **Edit shortcut** | Hover a shortcut and click the pencil icon (grid), or use edit on a list row. |
| **Reorder shortcuts** | Drag a shortcut to another position or into another group. |
| **Groups** | **Add group** creates a section; pencil to rename; ▲ ▼ to reorder; **+** adds a shortcut to that group; **Subgroup** adds a nested group under a top-level folder. |
| **Delete shortcut / group** | Use **Delete** in the modal; watch for **Undo** or use **⌘Z / Ctrl+Z** while offered. |
| **Import from tabs** | **From open tabs** → select tabs → add to a chosen group. |
| **Import from bookmarks** | **From bookmarks** → browse/select → add to a chosen group. |
| **Notes** | Type in the Notes area; content auto-saves locally. Chevron next to **Notes** collapses/expands (section can also be hidden in **Layout**). |
| **Logo** | **Logo** (top bar) to paste or pick custom SVG for the header area. |
| **Background slideshow** | **Background** → **Upload** for local images, or **Unsplash** to browse photos. Configure transition style, duration, and speed. |
| **Unsplash photos** | **Background** → **Unsplash** → enter your API key (see below) → search and add photos. Credits appear automatically. |
| **Tips & onboarding** | First visit shows quick tips; **Got it** dismisses. **Layout** panel includes a one-time welcome line and **Show quick tips on the page** to reopen the banner. |
| **Backup** | **Backup** downloads JSON (shortcuts, groups, notes, settings). **Restore** loads a backup file. |

## Page layout (sections)

The **Layout** panel controls what appears on the new tab:

- **Header** — Top bar (Background / Logo / Layout), greeting, clock, weather badge  
- **Search** — Search box and engine selector  
- **Notes** — Notes block  
- **Shortcuts** — Groups, filter, and shortcut actions  
- **Footer** — Copyright line  

Theme and weather location are configured in the same panel. Hiding the header shows the **floating Layout** control so you can open the panel again.

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

## Permissions (Chrome)

Declared in `manifest.json` for transparency:

- **`storage`** — Save settings, shortcuts, groups, notes, backgrounds, etc.  
- **`geolocation`** — Optional browser location for weather when you choose that mode  
- **`tabs`** — Only used for **From open tabs** import (read open tab titles/URLs you select)  
- **`bookmarks`** — Only used for **From bookmarks** import  

Network access is limited to **Open-Meteo** (weather + geocoding) and **Unsplash** (when you configure and use Unsplash), as listed under host permissions in the manifest.

## Privacy

The extension stores data locally. Optional network use: **Open-Meteo** (weather and geocoding) and **Unsplash** (when you use that feature with your own API key). Import features read **tabs** or **bookmarks** only in response to your actions in those dialogs; nothing is sent to a server by this extension.

For Chrome Web Store listings and similar, a standalone privacy policy is maintained here:  
[Privacy policy (chrome-start-extension)](https://github.com/wholmes/chrome-start-extension/blob/main/PRIVACY_POLICY.md)

## License

MIT License

Copyright (c) 2025 Whittfield Holmes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
