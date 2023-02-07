const router = require('express').Router();
const { YourCustomModel } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('homepage', { 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
