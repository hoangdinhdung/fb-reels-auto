# FB Reels Stable Auto

A lightweight Chrome extension that helps automate Facebook Reels playback.

The extension runs on Facebook pages, keeps the active Reel playing, skips sponsored content when detected, and automatically moves to the next Reel near the end of the current video.

## Features

- Automatically plays the active Facebook Reel.
- Moves to the next Reel when the current video is almost finished.
- Attempts to skip sponsored or advertising content.
- Uses a click-based next action with a scroll fallback.
- Requires no build step or external dependencies.

## Project Structure

```text
.
├── manifest.json   # Chrome extension manifest
├── content.js      # Facebook Reels automation script
└── README.md       # Project documentation
```

## Requirements

- Google Chrome, Microsoft Edge, or another Chromium-based browser.
- Access to `facebook.com`.
- Developer mode enabled in the browser extensions page.

## Installation

1. Clone or download this repository.
2. Open your browser extensions page:
   - Chrome: `chrome://extensions`
   - Edge: `edge://extensions`
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select the project folder that contains `manifest.json`.
6. Confirm that **FB Reels Stable Auto** appears in the extensions list.

## Usage

1. Open Facebook in the browser where the extension is installed.
2. Go to Facebook Reels.
3. Start playing a Reel.
4. The extension will run automatically in the background.

You can open the browser DevTools console to view logs such as:

```text
[FB Reels Stable] Started
[FB Reels] NEXT
[FB Reels] NEXT by time
```

## How It Works

The extension injects `content.js` into Facebook pages. The script checks the active video every 300 milliseconds, keeps playback running, detects sponsored text on the page, and triggers the next Reel when needed.

## Permissions

The extension requests access to:

```json
"*://*.facebook.com/*"
```

This permission is required so the content script can run on Facebook pages. The extension does not require a server, database, API key, or external service.

## Troubleshooting

- If the extension does not run, make sure it is enabled in `chrome://extensions`.
- If Facebook changes its page structure, the next button selector may need to be updated in `content.js`.
- If autoplay is blocked, interact with the page once and start a Reel manually.
- Reload Facebook after installing or updating the extension.

## Development

There is no build process. Edit `content.js` or `manifest.json`, then reload the extension from the browser extensions page.

## Disclaimer

This project is for personal automation and educational purposes. Use it responsibly and make sure your usage complies with Facebook's terms and policies.
