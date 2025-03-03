#!/bin/bash

# Create a temporary directory
mkdir -p temp_next
cd temp_next

# Download Next.js 14.2.16 tarball
curl -L https://registry.npmjs.org/next/-/next-14.2.16.tgz -o next.tgz

# Extract it
tar -xzf next.tgz

# Create the node_modules directory if it doesn't exist
mkdir -p ../node_modules

# Move the package to node_modules
rm -rf ../node_modules/next
mv package ../node_modules/next

# Clean up
cd ..
rm -rf temp_next

echo "Next.js 14.2.16 has been manually installed" 