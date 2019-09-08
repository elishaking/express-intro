const http = require('http');

const server = http.createServer((req, res) => {
  // add headers to response
  res.writeHead(200, {
    'content-type': 'text/html'
  });
  // add body to response
  res.write("<h1>Hello World");
  // terminate http connection
  res.end();
});

// listen for traffic on port 3000
server.listen(3000);
