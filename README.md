# Start Page

A Chrome extension that replaces the new tab with a minimal, customizable start page—clock, search, shortcuts, notes, weather-driven visuals, background slideshow with Unsplash integration, and optional sync to Google Docs.

## Features

- **Clock & greeting** — Live time and contextual greeting (Good morning / afternoon / evening)
- **Weather** — Current conditions and temperature (°F) from your location; the background orb and accent colors change with the weather (clear, cloudy, rain, snow, storm, etc.)
- **Background slideshow** — Beautiful image slideshow with smooth transitions (fade, crossfade, zoom, slide, blur); upload your own images or browse Unsplash photos
- **Unsplash integration** — Search and browse millions of free photos directly in the extension; automatic photo credits with proper attribution
- **Dynamic text color** — Text color automatically adjusts (black/white) based on background image brightness for optimal readability
- **Search** — Web search with your choice of engine (Google, DuckDuckGo, Bing, Brave Search)
- **Shortcuts** — Custom links in a grid with optional SVG icons and accent colors
- **Groups** — Organize shortcuts into sections (e.g. Work, Personal); add, rename, reorder, or delete groups
- **Reorder** — Drag-and-drop shortcuts within and between groups; move groups up/down with ▲ ▼
- **Themes** — Dark, light, or follow system preference
- **Notes** — Quick notes saved locally with collapse/expand toggle; optional one-way sync to a single Google Doc
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
| **Search engine** | Use the “Search with” dropdown under the search bar. |
| **Theme** | Use the “Theme” dropdown (System / Light / Dark). |
| **Weather** | Allow location when prompted; current conditions and temp (°F) appear below the clock and drive the orb/accent colors. Cached for 30 min. |
| **Add shortcut** | Click “Add shortcut” or the “+” on a group header; set name, URL, optional SVG icon and color. |
| **Edit shortcut** | Hover a shortcut and click the pencil icon. |
| **Reorder shortcuts** | Drag a shortcut to another position or into another group. |
| **Groups** | “Add group” to create a section; use the pencil to rename, ▲ ▼ to reorder, “+” to add a shortcut to that group. |
| **Notes** | Type in the Notes area; content auto-saves locally. Click the chevron (▼) next to “Notes” to collapse/expand. Use “Sync to Google” to push to a Google Doc (see below). |
| **Background slideshow** | Click “Background” (top-right) → “Upload” to add local images, or “Unsplash” to browse photos. Configure transition style, duration, and speed. |
| **Unsplash photos** | Click “Background” → “Unsplash” → enter your API key (see below) → search and click any photo to add it. Photo credits appear automatically. |
| **Backup** | Click “Backup” to download a JSON file (shortcuts, groups, notes, settings). Use “Restore” to load a backup. |

## Sync notes to Google Docs (optional)

Notes can be pushed to a single Google Doc named **“Start Page Notes”**. Sync is one-way: start page → Google Doc. You need your own OAuth client (Chrome requires this for unpacked extensions).

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
2. **Enable APIs**: APIs & Services → Library → enable **Google Docs API** and **Google Drive API**.
3. **Get your Extension ID**:
   - On the start page, click the **settings icon (⚙)** next to "Sync to Google"
   - The modal shows your Extension ID — copy this value
4. **Create OAuth client**: APIs & Services → Credentials → Create Credentials → **OAuth client ID**.  
   - Application type: **Chrome application**  
   - Application ID: Paste your Extension ID from step 3
   - Add this redirect URI (replace `YOUR_EXTENSION_ID` with your Extension ID):
     ```
     https://YOUR_EXTENSION_ID.chromiumapp.org
     ```
5. Copy the **Client ID** from Google Cloud Console (e.g. `123456789-xxx.apps.googleusercontent.com`).
6. **Configure in extension**:
   - In the settings modal (⚙ icon), paste your Client ID into the "Google OAuth Client ID" field
   - Click **"Save"**
7. Click **"Sync to Google"** on the start page. Sign in when prompted; a doc will be created and later syncs will update it.

Sync replaces the doc body with your current notes. The update avoids the Docs API restriction that `deleteContentRange` cannot include the newline at the end of a segment by deleting only up to that character, then inserting the new content.

## Background slideshow

Add multiple background images that cycle automatically with smooth transitions. Images can be uploaded from your computer or added from Unsplash.

### Upload images

1. Click **“Background”** (top-right, next to Logo)
2. Click **“Upload”** and select one or more images
3. Choose your transition style (fade, crossfade, zoom, slide, blur)
4. Set duration (how long each image shows) and transition speed
5. Click **“Save”** — images appear immediately

### Unsplash integration

Browse and add photos from Unsplash’s free photo library:

1. Get a free Unsplash API key:
   - Visit [Unsplash Developers](https://unsplash.com/developers)
   - Sign up (free, no credit card required)
   - Create a new application
   - Copy your **Access Key**

2. Add your API key:
   - Click **“Background”** → **“Unsplash”**
   - Paste your API key and click **“Save”**

3. Browse photos:
   - Search for keywords (e.g., “nature”, “mountains”, “city”)
   - Or leave search empty for random photos
   - Click any photo (or the + button) to add it to your slideshow

4. Photo credits:
   - Credits appear automatically in the bottom-right corner
   - Click to visit the photographer’s Unsplash profile
   - Credits follow Unsplash’s attribution requirements

### Dynamic text color

Text color (black or white) automatically adjusts based on background image brightness for optimal readability. Light images use dark text; dark images use light text.

## License

MIT
