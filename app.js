/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const users = require('./routes/users');
const cards = require('./routes/cards');
const all = require('./routes/all');

const {
  PORT = 3000,
} = process.env;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', users);
app.use('/', cards);
app.use('/', all);

app.listen(PORT, () => {
  console.log(`App successfully starting on port ${PORT}`);
});
