const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const dbConnection = await mongoose.connect(
//       'mongodb://localhost:27017/mongooseIntro'
//     );
//     console.log(
//       `Connected to Mongo. Database name: ${dbConnection.connections[0].name}`
//     );
//   } catch (error) {
//     console.log('An error occurred:', error);
//   }
// };
// connectDB()

// self calling function
(async () => {
  try {
    const dbConnection = await mongoose.connect(
      'mongodb://localhost/mongooseIntro'
    );
    console.log(
      `Connected to Mongo. Database name: ${dbConnection.connections[0].name}`
    );
  } catch (error) {
    console.log('An error occurred:', error);
  }
})();

// blueprint for my documents
const Book = mongoose.model('Book', { title: String });

const myFirstBook = { title: 'Javascript for dummies' };
const theHobbit = { title: 'The Hobbit' };
const book1984 = { title: '1984' };
const anotherBook = { title: 'Another book' };

// First CRUD operation: Create
const createBook = async book => {
  try {
    const newBook = await Book.create(book);
    console.log('A new book was created:', newBook.title);
  } catch (error) {
    console.log('An error occurred:', error);
  }
};
// createBook(theHobbit);
// createBook(book1984);
// createBook(anotherBook);

//Second CRUD operation: Read
const readBooks = async () => {
  try {
    const allBooks = await Book.find();
    console.log('All my books:', allBooks);
  } catch (error) {
    console.log('An error occurred:', error);
  }
};
// readBooks();

const handleDB = async () => {
  try {
    await createBook(theHobbit);
    await readBooks();
  } catch (error) {
    console.log('An error occurred:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Connection closed!');
  }
};
handleDB();
