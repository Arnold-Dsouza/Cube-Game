# This script helps ensure your project deploys successfully to Vercel
# Run with: `node deploy.js`

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Starting Vercel deployment process...');

// Step 1: Build the project
try {
  console.log('\n📦 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('\n❌ Build failed:', error);
  process.exit(1);
}

// Step 2: Ensure the dist directory has all necessary files
const distDir = path.join(__dirname, 'the-cube', 'dist');
const requiredFiles = ['index.html', 'script.js', 'style.css', 'vercel.json'];

console.log('\n🔍 Checking for required files in the dist directory...');
for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(distDir, file))) {
    console.error(`❌ Missing ${file} in dist directory!`);
    process.exit(1);
  }
}
console.log('✅ All required files present in dist directory!');

// Step 3: Deploy to Vercel
console.log('\n🚀 Deploying to Vercel...');
try {
  execSync('vercel --prod', { stdio: 'inherit' });
  console.log('\n🎉 Deployment successful!');
} catch (error) {
  console.error('\n❌ Deployment failed:', error);
  console.log('\nTry running `vercel --prod` manually to see more details.');
  process.exit(1);
}
