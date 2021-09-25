const express = require('express');
const path = require('path');
const morganBody = require('morgan-body');
const PORT = process.env.PORT || 5000;

const app = express().use(express.json());
morganBody(app, { noColors: process.env.NODE_ENV === 'production' });

app
  .post("/square", (req, res) => {
    const output = parseInt(req.body.input) ** 3;
    res.json(output);
  })
  .get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'temp.html'));
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
