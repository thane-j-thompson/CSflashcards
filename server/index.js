const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const qaPairs = require('../client/public/qa_pairs.json');

app.use(cors());

app.get('/api/flashcards', (req, res) => {
  res.json(qaPairs);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
