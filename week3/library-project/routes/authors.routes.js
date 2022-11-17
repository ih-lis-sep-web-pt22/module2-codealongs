const express = require('express');
const router = express.Router();
const Author = require('../models/Author.model');

// Create author
router.get('/create', (req, res, next) => {
  res.render('author/author-create');
});

router.post('/create', async (req, res, next) => {
  try {
    // console.log(req.body);
    const { name, bio, picture_url } = req.body;
    const author = {
      name,
      bio
    };
    if (picture_url !== '') {
      author.picture_url = picture_url;
    }
    const newAuthor = await Author.create(author);
    console.log('Author created:', newAuthor.name);
    res.redirect('/authors');
  } catch (error) {
    next(error);
  }
});

// CRUD - Read

router.get('/', async (req, res, next) => {
  try {
    const authors = await Author.find();
    res.render('author/authors-list', { authors });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
