# Rock Werchter 2026

Static programme and photo site for Rock Werchter 2026.

## Content

- Main page: `index.html`
- Photo page: `photos.html`
- Shared photo data: `photos.js`
- Hero asset: `artwork/rock-werchter-hero.jpg`
- Photo assets: `artwork/werchter-upload-001.jpg`, `artwork/werchter-upload-002.jpg`, `artwork/werchter-upload-003.jpg`, `artwork/werchter-upload-004.jpg`
- Current site version: `2.6.1`
- Artist bibliography: generated for every act in the programme, with Spotify links for known songs or top-song searches

## Telegram photo workflow

When a loose photo is sent via Telegram in this chat, treat it as a photo upload unless the caption clearly says otherwise:

1. Download the Telegram image.
2. Recognize visible context with vision: day, stage, artist, festivalgoers, tags and confidence.
3. Optimize the image as a web JPEG.
4. Save it as `artwork/werchter-upload-###.jpg`.
5. Append a record to `window.werchterPhotos` in `photos.js`.
6. Bump the version and deploy to `main`.

Uncertain matches should be marked `te-controleren`.
