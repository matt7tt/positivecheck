#!/bin/bash

# Get the absolute path of the static HTML file
STATIC_FILE="$(pwd)/static-index.html"

# Open the file in the default browser
open "$STATIC_FILE"

echo "Opening $STATIC_FILE in your browser" 