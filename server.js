const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Serve the static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist', 'registration-for-the-quran-competition')));

// Proxy configuration
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://www.ahbabkhatamelmorsalen.com',
    changeOrigin: true,
  })
);

// Redirect all requests to the index.html file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'registration-for-the-quran-competition', 'index.html'));
});

// Start the app by listening on the default Heroku port or 8080
const port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log(`Server started on port ${port}`);
});
