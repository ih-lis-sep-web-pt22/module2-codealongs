const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// blueprint for our books
const bookSchema = new Schema({
  title: String,
  author: String,
  yearPublished: Number
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
