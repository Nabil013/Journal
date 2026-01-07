const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/save', (req, res) => {
  const { section, html, selection } = req.body;
  const entry = `\n--- Section ${section} ---\n${html}\nSelection: ${JSON.stringify(selection)}\n`;

  fs.appendFile(path.join(__dirname, 'journal.txt'), entry, (err) => {
    if (err) return res.status(500).json({ message: 'Failed to save' });
    res.json({ message: 'Saved successfully!' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
