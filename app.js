/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const users = require('./routes/routes');
const cards = require('./routes/cards');

const {
  PORT = 3000,
} = process.env;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', users);
app.use('/', cards);

app.listen(PORT, () => {
  console.log(`App successfully starting on port ${PORT}`);
});
