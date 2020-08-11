# Upload media

Command line tool to upload a file to your own server and getting a shareable link

## Usage
`upload-media file.png`

Puts the resulting shareable link in your clipboard

No file type restrictions are in place

## Install

`cp .env.example .env`

Configure `.env`

Add startup file for index.js

Add nginx/apache/etc config file to add a domain (optional)

Configure `upload-media`, change `domain.com` to same url as in `.env`

Change `username@server` to ssh login

(Optional) Add crontab for delete-files.js (recommended timing `0 0 * * *`)

Add files for upload-media and upload-screenshot somewhere your path (optional)

## Dependencies
- xclip
- rsync
- bash
- node.js
- nginx / apache / etc
- curl
- scrot (Required for auto screenshot upload, optional)