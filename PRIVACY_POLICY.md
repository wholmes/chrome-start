# Privacy Policy for Start Page Extension

**Last updated:** March 2025

## Overview

Start Page is a Chrome extension that replaces your new tab with a customizable start page. This privacy policy explains what data we collect, how we use it, and your rights regarding your data.

## Data Collection and Storage

### Local Storage Only

All data is stored **locally** on your device using Chrome's `chrome.storage.local` API. No data is transmitted to our servers or any third-party servers except as described below.

The following data is stored locally:
- **Shortcuts and Groups**: Your custom links, icons, colors, and organizational groups
- **Notes**: Text content you enter in the notes section
- **Settings**: Theme preference, search engine choice, shortcuts layout (grid/list), weather animation toggle, weather location mode and manual place/coordinates (stored locally only)
- **Logo**: Custom SVG logo (if you add one)
- **Background Images**: Images you upload or select from Unsplash (stored as data URLs)
- **Unsplash API Key**: Your personal Unsplash API key (if you provide one)
- **Weather Cache**: Cached weather data for 30 minutes to reduce API calls

### No Account Required

This extension does not require you to create an account or provide any personal information. All functionality works without registration.

## Third-Party Services

### Weather Data (Open-Meteo)

- **Forecast API**: https://api.open-meteo.com — receives **latitude and longitude** to return current conditions and temperature.
- **Geocoding API** (optional): https://geocoding-api.open-meteo.com — when you choose **manual** weather location and enter a **place name** (not raw coordinates), the extension sends that **search text** to look up coordinates. Coordinates and place queries are not sent to our servers.
- **Browser location** (optional): If you choose **browser location**, the extension uses Chrome’s location permission to read your coordinates, then sends those coordinates to the forecast API only.
- **Manual coordinates**: If you enter latitude and longitude yourself, only those numbers are sent to the forecast API (no geocoding request).
- **Privacy**: Open-Meteo is a free, open-source weather service. We do not control their privacy practices. You can use **manual** location to avoid browser geolocation entirely.

### Unsplash (Optional)

- **Service**: Unsplash API (https://api.unsplash.com) and Unsplash CDN (https://images.unsplash.com)
- **Data Sent**: Search queries (if you search for photos) and your Unsplash API key
- **Purpose**: To search and display photos from Unsplash as background images
- **Privacy**: This feature is **completely optional**. You must provide your own Unsplash API key to use it. We do not store or transmit your API key to any server except Unsplash's API when you use the feature.
- **Usage**: Unsplash features are only active when you explicitly open the Unsplash browser and provide your API key.

## Open tabs (optional shortcut import)

When you click **From open tabs**, the extension uses Chrome’s `tabs` permission to read **URLs and titles** of your open tabs so you can pick which sites to save as shortcuts. That data is processed **only on your device** to build the list in the dialog. It is **not** sent to our servers (we do not operate any servers) or to any third party. Only **http** and **https** tabs are offered; you can skip pinned tabs and edit each name before saving.

## Bookmarks (optional shortcut import)

When you click **From bookmarks**, the extension uses Chrome’s `bookmarks` permission to read your **bookmark tree** (titles, URLs, and folder names) so you can choose which bookmarks to add as shortcuts. That data is processed **only on your device** in the dialog. It is **not** sent to our servers or any third party. Only **http** and **https** bookmarks are listed.

## Data Transmission

- **Weather**: Coordinates are sent to Open-Meteo’s forecast API when weather loads. Place names may be sent to Open-Meteo’s geocoding API when you use manual location with a city or address. Browser geolocation is only used if you select that option and grant permission.
- **Unsplash API**: Search queries and API requests are sent to Unsplash only when you use the Unsplash feature and have provided your API key.
- **No Other Transmission**: No other data is transmitted to external servers. All other data remains on your device.

## Your Rights

- **Access**: All your data is stored locally in Chrome's extension storage. You can access it through Chrome's developer tools or by using the extension's Backup feature.
- **Deletion**: You can delete all extension data by:
  1. Removing the extension from Chrome
  2. Using the extension's "Clear" buttons for individual features
  3. Manually clearing Chrome's extension storage
- **Export**: Use the extension's "Backup" feature to export all your data as a JSON file.

## Data Security

- All data is stored locally on your device
- No data is transmitted to our servers (we don't operate any servers)
- Your Unsplash API key is stored locally and only sent to Unsplash when you use their features
- Weather location data is sent to Open-Meteo, a third-party service we don't control

## Changes to This Policy

We may update this privacy policy from time to time. The "Last updated" date at the top indicates when changes were made. Continued use of the extension after changes constitutes acceptance of the updated policy.

## Contact

For questions about this privacy policy, please open an issue on the GitHub repository: https://github.com/wholmes/chrome-start-extension

## Compliance

This extension complies with:
- Chrome Web Store Developer Program Policies
- Manifest V3 requirements
- Single-purpose extension guidelines

---

**Summary**: This extension stores all data locally on your device. External transmission includes: (1) Open-Meteo for weather (coordinates to the forecast API; optional geocoding API when you search by place name; optional browser location if you choose it), (2) Unsplash when you use that feature with your API key. **From open tabs** and **From bookmarks** only read data on your device to show pick lists. No data is sent to our servers because we don't operate any servers.
