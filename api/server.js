// Serverless version of our Express app
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory 
app.use(express.static(path.join(__dirname, '..', 'the-cube', 'dist')));

// For any request, send the index.html file
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'the-cube', 'dist', 'index.html'));
});

// Export the Express API
module.exports = app;
