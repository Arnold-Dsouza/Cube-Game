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

// Create a basic vercel.json in the dist directory if it doesn't exist
// This helps with routing when deployed
const vercelConfigPath = path.join(destDir, 'vercel.json');
if (!fs.existsSync(vercelConfigPath)) {
  const vercelConfig = {
    "routes": [
      { "handle": "filesystem" },
      { "src": "/(.*)", "dest": "/index.html" }
    ]
  };
  
  fs.writeFileSync(vercelConfigPath, JSON.stringify(vercelConfig, null, 2));
  console.log('Created vercel.json in dist directory');
}

console.log('Files copied successfully to dist directory');
