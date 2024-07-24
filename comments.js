// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. 
// When the server receives a request, it should log the request method and path in the console.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(`Request method: ${req.method}`);
  console.log(`Request path: ${req.url}`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
