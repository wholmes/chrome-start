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
- **Settings**: Theme preference, search engine choice, weather animation toggle
- **Logo**: Custom SVG logo (if you add one)
- **Background Images**: Images you upload or select from Unsplash (stored as data URLs)
- **Unsplash API Key**: Your personal Unsplash API key (if you provide one)
- **Weather Cache**: Cached weather data for 30 minutes to reduce API calls

### No Account Required

This extension does not require you to create an account or provide any personal information. All functionality works without registration.

## Third-Party Services

### Weather Data (Open-Meteo)

- **Service**: Open-Meteo API (https://api.open-meteo.com)
- **Data Sent**: Your approximate location (latitude/longitude) when you grant location permission
- **Purpose**: To fetch current weather conditions and temperature
- **Privacy**: Open-Meteo is a free, open-source weather service. We do not control their privacy practices. Please review their privacy policy if you have concerns.
- **Location**: Location is only sent when you explicitly grant permission. You can deny location permission and the extension will work without weather data.

### Unsplash (Optional)

- **Service**: Unsplash API (https://api.unsplash.com) and Unsplash CDN (https://images.unsplash.com)
- **Data Sent**: Search queries (if you search for photos) and your Unsplash API key
- **Purpose**: To search and display photos from Unsplash as background images
- **Privacy**: This feature is **completely optional**. You must provide your own Unsplash API key to use it. We do not store or transmit your API key to any server except Unsplash's API when you use the feature.
- **Usage**: Unsplash features are only active when you explicitly open the Unsplash browser and provide your API key.

## Data Transmission

- **Weather API**: Your location coordinates are sent to Open-Meteo when you grant location permission. This happens automatically when the extension loads and checks for weather.
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

**Summary**: This extension stores all data locally on your device. The only external data transmission is: (1) location coordinates to Open-Meteo for weather (with your permission), and (2) Unsplash API requests when you use the optional Unsplash feature (with your API key). No data is sent to our servers because we don't operate any servers.
