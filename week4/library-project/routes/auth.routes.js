const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const mongoose = require('mongoose');
const saltRounds = 10;

router.get('/signup', async (req, res, next) => {
  try {
    res.render('auth/signup');
  } catch (error) {
    next(error);
  }
});

router.post('/signup', async (req, res, next) => {
  try {
    // console.log(req.body);
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.render('auth/signup', {
        errorMessage: 'All fields are required!'
      });
    }
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm;
    if (!passwordRegex.test(password)) {
      return res
        .status(500)
        .render('auth/signup', {
          errorMessage:
            'Password needs to be at least 6 characters and must contain one uppercase letter, one lowercase letter, a number and a special character.'
        });
    }
    const salt = await bcrypt.genSalt(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);
    await User.create({ username, email, passwordHash });
    res.redirect('/profile');
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      res.status(500).render('auth/signup', { errorMessage: error.message });
    } else if (error.code === 11000) {
      res.status(500).render('auth/signup', {
        errorMessage: 'Username or email already in use.'
      });
    } else {
      next(error);
    }
  }
});

router.get('/profile', async (req, res, next) => {
  try {
    res.render('auth/profile');
  } catch (error) {
    next(error);
  }
});

module.exports = router;
