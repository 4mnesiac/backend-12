const router = require('express').Router();
const path = require('path');

// eslint-disable-next-line import/no-dynamic-require
const users = require(path.resolve('data', 'users.json'));

router.get('/users', (req, res) => {
  res.status(200).json(users);
});
// eslint-disable-next-line no-underscore-dangle
router.get('/users/:_id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userId = req.params._id;
  // eslint-disable-next-line no-underscore-dangle
  const foundUser = users.find((item) => item._id === userId);

  if (foundUser) {
    res.status(200).send(foundUser);
    return;
  }
  res.status(404).send({
    message: 'Нет пользователя с таким id',
  });
});

// eslint-disable-next-line eol-last
module.exports = router;