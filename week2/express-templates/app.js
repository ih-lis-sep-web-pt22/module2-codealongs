const express = require('express');
const app = express();

// making the public folder available
app.use(express.static('public'));

// informing express that we are using handlebars
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('index');
});

// create a new route to /me
app.get('/me', (req, res) => {
  const data = {
    name: 'Lúcia',
    surname: 'Duarte',
    location: 'Lisbon',
    occupation: 'developer',
    age: 29,
    address: 'Heden Sta Apolónia',
    favoriteFoods: ['pizza', 'sushi', 'bacalhau com natas', 'picanha']
  };

  res.render('me', data);
});

app.listen(3000, () => console.log('My app is running!'));
