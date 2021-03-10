// Dependencies
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = fs.readFile(path.join(__dirname, "index.html"), (e, data) => {
    if (e) console.error(e);
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  })
});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
