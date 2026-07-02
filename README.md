# Rock Werchter 2026

Static programme and photo site for Rock Werchter 2026.

## Content

- Main page: `index.html`
- Photo page: `photos.html`
- Shared photo data: `photos.js`
- Artist images: `artist-images.js` with Wikimedia thumbnails where available and generated fallback tiles elsewhere
- Hero asset: `artwork/rock-werchter-hero.jpg`
- Photo assets: `artwork/werchter-upload-001.jpg`, `artwork/werchter-upload-002.jpg`, `artwork/werchter-upload-003.jpg`, `artwork/werchter-upload-004.jpg`, `artwork/werchter-upload-005.jpg`, `artwork/werchter-upload-006.jpg`
- Current site version: `2.9.4`
- Artist bibliography: generated for every act in the programme, with Spotify links for known songs or top-song searches

## Telegram photo workflow

When a loose photo is sent via Telegram in this chat, treat it as a photo upload unless the caption clearly says otherwise:

1. Download the Telegram image.
2. Recognize visible context with vision: day, stage, artist, festivalgoers, tags and confidence.
3. Optimize the image as a web JPEG.
4. Save it as `artwork/werchter-upload-###.jpg`.
5. Append a record to `window.werchterPhotos` in `photos.js`.
6. Bump the version and deploy to `main`.
7. Newest photo uploads render first on the home preview and photo page.

Uncertain matches should be marked `te-controleren`.

## Artist images

Artist cards use `artist-images.js`. The current pass found 106 reliable online images for 144 programme acts: 100 official Rock Werchter act images and 6 Wikipedia/Wikimedia/Wikidata images. Acts without a reliable match render a generated fallback tile with the artist name.