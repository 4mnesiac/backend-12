const router = require('express').Router();
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const cards = require(path.resolve('data', 'cards.json'));

router.get('/cards', (req, res) => {
  res.status(200).json(cards);
});

// eslint-disable-next-line eol-last
module.exports = router;