# Start Page

A Chrome extension that replaces the new tab with a minimal, customizable start page—clock, search, shortcuts, notes, weather-driven visuals, and background slideshow with Unsplash integration.

## Features

- **Clock & greeting** — Live time and contextual greeting (Good morning / afternoon / evening)
- **Weather** — Current conditions and temperature (°F) from your location; the background orb and accent colors change with the weather (clear, cloudy, rain, snow, storm, etc.)
- **Weather animations** — Beautiful particle effects that match current conditions (rain, snow, lightning, fog, sun rays, cloud movement) with an on/off toggle
- **Background slideshow** — Beautiful image slideshow with smooth transitions (fade, crossfade, zoom, slide, blur); upload your own images or browse Unsplash photos
- **Unsplash integration** — Search and browse millions of free photos directly in the extension; automatic photo credits with proper attribution
- **Dynamic text color** — Text color automatically adjusts (black/white) based on background image brightness for optimal readability
- **Search** — Web search with your choice of engine (Google, DuckDuckGo, Bing, Brave Search)
- **Shortcuts** — Custom links in a grid with optional SVG icons and accent colors
- **Groups** — Organize shortcuts into sections (e.g. Work, Personal); add, rename, reorder, or delete groups
- **Reorder** — Drag-and-drop shortcuts within and between groups; move groups up/down with ▲ ▼
- **Themes** — Dark, light, or follow system preference
- **Notes** — Quick notes saved locally with collapse/expand toggle
- **Backup & restore** — Export and import shortcuts, groups, and notes as JSON

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
     From the repo root, that folder is: **`start-page/start-page/start-page`**

3. Open a **new tab** to use your start page.

## Usage

| Action | How |
|--------|-----|
| **Search** | Type in the search box and press Enter. |
| **Search engine** | Use the "Search with" dropdown under the search bar. |
| **Theme** | Use the "Theme" dropdown (System / Light / Dark). |
| **Weather** | Allow location when prompted; current conditions and temp (°F) appear below the clock and drive the orb/accent colors. Cached for 30 min. |
| **Weather animations** | Toggle "Weather animations" in the search options to enable/disable particle effects (rain, snow, lightning, fog, sun rays, clouds) that match current conditions. |
| **Add shortcut** | Click "Add shortcut" or the "+" on a group header; set name, URL, optional SVG icon and color. |
| **Edit shortcut** | Hover a shortcut and click the pencil icon. |
| **Reorder shortcuts** | Drag a shortcut to another position or into another group. |
| **Groups** | "Add group" to create a section; use the pencil to rename, ▲ ▼ to reorder, "+" to add a shortcut to that group. |
| **Notes** | Type in the Notes area; content auto-saves locally. Click the chevron (▼) next to "Notes" to collapse/expand. |
| **Background slideshow** | Click "Background" (top-right) → "Upload" to add local images, or "Unsplash" to browse photos. Configure transition style, duration, and speed. |
| **Unsplash photos** | Click "Background" → "Unsplash" → enter your API key (see below) → search and click any photo to add it. Photo credits appear automatically. |
| **Backup** | Click "Backup" to download a JSON file (shortcuts, groups, notes, settings). Use "Restore" to load a backup. |

## Background slideshow

Add multiple background images that cycle automatically with smooth transitions. Images can be uploaded from your computer or added from Unsplash.

### Upload images

1. Click **"Background"** (top-right, next to Logo)
2. Click **"Upload"** and select one or more images
3. Choose your transition style (fade, crossfade, zoom, slide, blur)
4. Set duration (how long each image shows) and transition speed
5. Click **"Save"** — images appear immediately

### Unsplash integration

Browse and add photos from Unsplash's free photo library:

1. Get a free Unsplash API key:
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Sign up (free, no credit card required)
   - Create a new application
   - Copy your **Access Key**

2. Add your API key:
   - Click **"Background"** → **"Unsplash"**
   - Paste your API key and click **"Save"**

3. Browse photos:
   - Search for keywords (e.g., "nature", "mountains", "city")
   - Or leave search empty for random photos
   - Click any photo (or the + button) to add it to your slideshow

4. Photo credits:
   - Credits appear automatically in the bottom-right corner
   - Click to visit the photographer's Unsplash profile
   - Credits follow Unsplash's attribution requirements

### Dynamic text color

Text color (black or white) automatically adjusts based on background image brightness for optimal readability. Light images use dark text; dark images use light text.

## License

MIT
