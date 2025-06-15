const express = require('express');
const app = express();

// enable CORS for all routes
const cors = require('cors');
app.use(cors());
const response = require('./response.json');

// serve static files from uploads folder
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/api/videos', (req, res) => {
  res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});