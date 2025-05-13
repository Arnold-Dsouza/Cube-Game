// Cross-platform file copy script for build process
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'the-cube', 'src');
const destDir = path.join(__dirname, '..', 'the-cube', 'dist');

// Make sure the destination directory exists
if (!fs.existsSync(destDir)){
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy index.html
fs.copyFileSync(
  path.join(sourceDir, 'index.html'),
  path.join(destDir, 'index.html')
);

// Copy script.js
fs.copyFileSync(
  path.join(sourceDir, 'script.js'),
  path.join(destDir, 'script.js')
);

console.log('Files copied successfully to dist directory');
