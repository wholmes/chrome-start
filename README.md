# Start Page

A Chrome extension that replaces the new tab with a minimal, customizable start page—clock, search, shortcuts, notes, weather-driven visuals, and optional sync to Google Docs.

## Features

- **Clock & greeting** — Live time and contextual greeting (Good morning / afternoon / evening)
- **Weather** — Current conditions and temperature (°F) from your location; the background orb and accent colors change with the weather (clear, cloudy, rain, snow, storm, etc.)
- **Search** — Web search with your choice of engine (Google, DuckDuckGo, Bing, Brave Search)
- **Shortcuts** — Custom links in a grid with optional SVG icons and accent colors
- **Groups** — Organize shortcuts into sections (e.g. Work, Personal); add, rename, reorder, or delete groups
- **Reorder** — Drag-and-drop shortcuts within and between groups; move groups up/down with ▲ ▼
- **Themes** — Dark, light, or follow system preference
- **Notes** — Quick notes saved locally; optional one-way sync to a single Google Doc
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
| **Notes** | Type in the Notes area; content auto-saves locally. Use “Sync to Google” to push to a Google Doc (see below). |
| **Backup** | Click “Backup” to download a JSON file (shortcuts, groups, notes, settings). Use “Restore” to load a backup. |

## Sync notes to Google Docs (optional)

Notes can be pushed to a single Google Doc named **“Start Page Notes”**. Sync is one-way: start page → Google Doc. You need your own OAuth client (Chrome requires this for unpacked extensions).

1. Open [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
2. **Enable APIs**: APIs & Services → Library → enable **Google Docs API** and **Google Drive API**.
3. **Create OAuth client**: APIs & Services → Credentials → Create Credentials → **OAuth client ID**.  
   - Application type: **Chrome application**  
   - Application ID: `kgciifcaeddohhpemljgbojiadakdapa` (or your extension ID from `chrome://extensions` if different).
4. Copy the **Client ID** (e.g. `123456789-xxx.apps.googleusercontent.com`).
5. In the extension folder, open **`newtab.js`** and set:
   ```js
   const GOOGLE_OAUTH_CLIENT_ID = 'your-client-id.apps.googleusercontent.com';
   ```
   (Replace the placeholder `YOUR_CLIENT_ID.apps.googleusercontent.com`.)
6. Reload the extension, then on the start page click **Sync to Google**. Sign in when prompted; a doc will be created and later syncs will update it.

Sync replaces the doc body with your current notes. The update avoids the Docs API restriction that `deleteContentRange` cannot include the newline at the end of a segment by deleting only up to that character, then inserting the new content.

## License

MIT
