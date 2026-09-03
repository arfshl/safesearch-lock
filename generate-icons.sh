#!/bin/bash

for size in 16 32 48 64 96 128 256 512; do
    inkscape ./icons/icon.svg \
        --export-filename="./icons/${size}.png" \
        --export-width="$size" \
        --export-height="$size"
done
