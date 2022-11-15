const express = require('express');

const app = express();

// make everything inside public folder available
app.use(express.static('public'));

//localhost:3000/home
app.get('/home', (request, response) => {
  console.log('the request url:', request.url);
  // response.send('<h1>Welcome to my app!</h1>');
  response.sendFile(__dirname + '/views/home.html');
});

//localhost:3000/cat
app.get('/cat', (request, response) => {
  console.log('the request url', request.url);
  response.sendFile(__dirname + '/views/cat-page.html');
  // response.send(`<!doctype html>
  // <html>
  //   <head>
  //     <meta charset="utf-8">
  //     <title>Cat</title>
  //     <link rel="stylesheet" href="/stylesheets/styles.css" />
  //   </head>
  //   <body>
  //     <h1>Cat</h1>
  //     <p>My second route is to this really cool cat page</p>
  //     <img src="/images/cool-cat.jpeg" />
  //   </body>
  // </html>`);
});

app.listen(3000, () => console.log('Server is running!'));
