const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from repo root
app.use(express.static(path.join(__dirname)));

// Health check
app.get("/health", (_req, res) => res.status(200).send("OK"));

// Always return index.html for any route
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`LitMatch server running on port ${PORT}`);
});
