const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'the-cube/dist')));

// For any request, send the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'the-cube/dist/index.html'));
});

// Check if being run directly (not imported)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
  });
}

// Export the app for serverless environments
module.exports = app;
