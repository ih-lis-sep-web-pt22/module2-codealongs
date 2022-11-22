const express = require('express');
const router = express.Router();
const Author = require('../models/Author.model');
const Book = require('../models/Book.model');
const { isLoggedIn } = require('../middleware/route-guard');

// Create author
router.get('/create', isLoggedIn, (req, res, next) => {
  res.render('author/author-create');
});

router.post('/create', isLoggedIn, async (req, res, next) => {
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

router.get('/:authorId', isLoggedIn, async (req, res, next) => {
  try {
    const { authorId } = req.params;

    const author = await Author.findById(authorId).populate('books');
    const booksList = await Book.find();
    const { _id, name, bio, picture_url, books } = author;
    res.render('author/author-details', {
      _id,
      name,
      bio,
      picture_url,
      books,
      booksList
    });
  } catch (error) {
    next(error);
  }
});

router.post('/:authorId/edit', isLoggedIn, async (req, res, next) => {
  try {
    const { authorId } = req.params;
    // console.log(req.body);
    const { books } = req.body;
    await Author.findByIdAndUpdate(authorId, {
      $push: { books }
    });
    res.redirect(`/authors/${authorId}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
