const router = require('express').Router();
const { YourCustomModel } = require('../../models');

router.post('/', async (req, res) => {
  try {
    res.status(200).json({message: "Success"})
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    res.status(200).json({message: "logged in"})
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
