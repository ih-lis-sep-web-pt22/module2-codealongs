const express = require('express');
const router = express.Router();
const Book = require('../models/Book.model');

// list of all books
router.get('/books', async (req, res, next) => {
  try {
    const allBooks = await Book.find();
    res.render('books/books-list', { books: allBooks });
  } catch (error) {
    console.log('error', error);
    // calling the error middleware
    next(error);
  }
});

router.get('/books/:bookId', async (req, res, next) => {
  try {
    // console.log(req.params);
    const { bookId } = req.params;

    const book = await Book.findById(bookId);
    res.render('books/book-details', book);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
