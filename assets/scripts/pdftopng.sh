#!/bin/bash

#
#   This script converts PDF files in the high-quality PNG images
#   for the newsletter section.  Unfortunately, it can only be guaranteed
#   to run on Linux with the ImageMagick convert tool installed.
#
#   Usage: pdftopng.sh [PDF Files]

if [[ ! -n "$(which convert 2>/dev/null)" ]]; then echo "Error: Program \"convert\" is not installed."; exit 1; fi

for FILE in "$@"; do
    OUTFILE="${FILE%.pdf}.png"

    convert -density 300 "$FILE" -quality 100 "$OUTFILE"
done
