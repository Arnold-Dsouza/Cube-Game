// api/index.js - Entry point for Vercel API functions
// This is the serverless version of our Express app

const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory 
app.use(express.static(path.join(__dirname, '../the-cube/dist')));

// For any request, send the index.html file
app.all('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../the-cube/dist/index.html'));
});

// Export the Express API for serverless function
module.exports = app;
