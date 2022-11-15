const http = require('http');

const server = http.createServer((request, response) => {
  console.log('Request url:', request.url);

  if (request.url === '/') {
    response.write('Hello world!');
    response.end();
  } else if (request.url === '/ironhack') {
    response.write('Hello ironhacker!');
    response.end();
  } else {
    response.statusCode = 404;
    response.write('Page not found');
    response.end();
  }
});

server.listen(3000);
