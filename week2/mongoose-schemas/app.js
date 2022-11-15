const mongoose = require('mongoose');
const Book = require('./models/Book');
const User = require('./models/User');

(async () => {
  try {
    const dbConnection = await mongoose.connect(
      'mongodb://localhost/mongooseSchemas'
    );
    console.log(`Connected to ${dbConnection.connections[0].name}`);
  } catch (error) {
    console.log('An error occurred:', error);
  }
})();

const booksArray = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    yearPublished: 1925
  },
  {
    title: 'Moby Dick',
    author: 'Herman Melville',
    yearPublished: 1851
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    yearPublished: 1813
  }
];

const createBooks = async books => {
  try {
    const allCreatedBooks = await Book.create(books);
    allCreatedBooks.forEach(book => {
      console.log('Created book:', book);
    });
  } catch (error) {
    console.log('An error occurred', error);
  }
};
// createBooks(booksArray);

const readBooks = async () => {
  try {
    // retrieves all documents in the db
    const allBooks = await Book.find();
    console.log('all the books:', allBooks);

    // search by property
    const mobyDick = await Book.find({ title: 'Moby Dick' });
    console.log('Book with moby dick title:', mobyDick);

    // books published after 1900 but only show title and yearPublished
    const booksAfter1900 = await Book.find(
      { yearPublished: { $gt: 1900 } },
      'title yearPublished' // {title: 1, yearPublished: 1, _id: 0}
    );
    console.log('Books after 1900', booksAfter1900);

    // all the books sorted by year
    const sortedBooks = await Book.find(
      {},
      {},
      { sort: { yearPublished: -1 }, limit: 2 }
    );
    console.log('Books sorted:', sortedBooks);
  } catch (error) {
    console.log('An error occured:', error);
  }
};
// readBooks();

const lucia = {
  username: 'Lucia',
  email: 'lucia@me.com',
  city: 'Lisbon'
};

const usernameTooBig = {
  username: 'AsuperBigUsernameInOrderForthisToFail'
};

const noUsername = {
  email: 'a@b.com',
  city: 'Lisbon'
};

const invalidCity = {
  username: 'Xico',
  city: 'Porto'
};

const createUser = async user => {
  try {
    const createdUser = await User.create(user);
    console.log('Created User:', createdUser);
  } catch (error) {
    console.log('An error occurred:', error);
  }
};
// createUser(lucia);
// createUser(usernameTooBig);
// createUser(noUsername);
// createUser(invalidCity);

// CRUD - Update
const updateUserWithBook = async () => {
  const user = await User.findOne({ username: 'Lucia' });
  const book = await Book.findOne({ title: 'Moby Dick' });

  const updatedUser = await User.findByIdAndUpdate(
    user._id,
    // since booksOwned is an array, we need to push the values
    {
      $push: {
        booksOwned: [book._id]
      }
    },
    { new: true } // making sure we receive the updated document
  );
  console.log('Updated User:', updatedUser);
};
// updateUserWithBook();

const readUser = async () => {
  const user = await User.findOne({ username: 'Lucia' }).populate('booksOwned');
  console.log('User has the following books:', user.booksOwned);
};
// readUser();

// CRUD - Delete
const deleteBook = async () => {
  await Book.deleteOne({ title: 'Pride and Prejudice' });
  console.log('Book deleted.');
};
// deleteBook();

const findAndDeleteBook = async () => {
  await Book.findByIdAndDelete('636d6b523378378166b2542f');
  console.log('Book deleted.');
};
// findAndDeleteBook();
