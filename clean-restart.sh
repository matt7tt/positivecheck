#!/bin/bash

# Stop any running Next.js processes
pkill -f "next"

# Remove build caches
rm -rf .next
rm -rf .next-clean

# Clear npm cache
npm cache clean --force

# Remove node_modules
rm -rf node_modules

# Remove lock files
rm -f package-lock.json
rm -f yarn.lock

# Install dependencies with exact version
npm install --save-exact

# Start the development server
npm run dev 