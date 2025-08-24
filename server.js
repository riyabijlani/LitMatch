const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files from the repo root
app.use(express.static(path.join(__dirname)));

// Always return index.html (good for simple SPAs / single page)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(LitMatch server running on port );
});
