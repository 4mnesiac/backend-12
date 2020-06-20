const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res
    .status(200)
    .json(users);
});
router.get('/users/:_id', (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userId = req.params._id;
  const foundUser = users.filter((item) => item._id === userId);
  if (foundUser.length > 0) {
    res
      .status(200)
      .send(foundUser);
    return;
  }
  res
    .status(404)
    .send({
      message: 'Нет пользователя с таким id',
    });
});

router.get('/', (req, res) => {
  res
    .status(404)
    .send({
      message: 'Запрашиваемый ресурс не найден',
    });
});
module.exports = router;