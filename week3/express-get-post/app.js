const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// allows us to read to req.body
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

// Route params
// localhost/3000/users/lucia/books/1
app.get('/users/:user/books/:bookId', (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

// Query strings
// localhost:3000/search?city=lisbon
app.get('/search', (req, res) => {
  res.send(req.query);
});

// displaying the login form
app.get('/login', (req, res) => {
  res.render('login');
});

// receiving info from a post form
app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('Login done');
});

app.listen('3000', () => console.log('App is running!'));
