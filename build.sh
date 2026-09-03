#!/bin/bash

# Build Chromium
mkdir -p dist/chromium
cp chromium/manifest.json background.js ruleset.js LICENSE dist/chromium/
cp -r libs icons dist/chromium/ 
cd dist/chromium 
zip -rq ../../safesearch-lock-chromium.zip . 
cd ../.. && rm -rf dist

# Build Firefox
mkdir -p dist/firefox
cp firefox/manifest.json background.js ruleset.js LICENSE dist/firefox/
cp -r libs icons dist/firefox/ 
cd dist/firefox
zip -rq ../../safesearch-lock-firefox.zip . 
cd ../.. && rm -rf dist