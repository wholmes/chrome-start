# Start Page

A Chrome extension that replaces the new tab page with a minimal, customizable start page.

## Features

- **Clock & greeting** — Time and contextual greeting (Good morning / afternoon / evening)
- **Search** — Web search with choice of engine (Google, DuckDuckGo, Bing, Brave Search)
- **Shortcuts** — Custom links in a grid with optional SVG icons and accent colors
- **Groups** — Organize shortcuts into sections (e.g. Work, Personal)
- **Reorder** — Drag-and-drop shortcuts within and between groups; move groups with ▲/▼
- **Themes** — Dark, light, or follow system preference
- **Backup & restore** — Export and import your shortcuts and groups as JSON

## Installation

1. Clone the repo:
   ```bash
   git clone git@github.com:wholmes/chrome-start.git
   cd chrome-start
   ```
2. In Chrome, go to `chrome://extensions`.
3. Turn on **Developer mode** (top right).
4. Click **Load unpacked** and select the folder that contains `manifest.json` (e.g. `start-page/start-page/start-page` from the repo root).
5. Open a new tab to see your start page.

## Usage

- **Search** — Type in the search box and press Enter.
- **Add shortcut** — Click “Add shortcut” or the “+” on a group header; fill in name, URL, optional icon (paste raw `<svg>` code) and color.
- **Edit shortcut** — Hover a shortcut and click the pencil icon.
- **Add / edit / reorder groups** — Use “Add group,” or the edit (pencil) and ▲/▼ buttons on group headers.
- **Theme** — Use the Theme dropdown under the search bar (System / Light / Dark).
- **Backup** — Click “Backup” to download a JSON file. Use “Restore” to load it back.

Data (shortcuts, groups, search engine, theme) is stored locally in the extension and persists across updates.

## License

MIT
