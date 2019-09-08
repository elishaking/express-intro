const http = require('http');

// //? this server responds to any url on localhost:3000
// const server = http.createServer((req, res) => {
//   //? add headers to response
//   res.writeHead(200, {
//     'content-type': 'text/html'
//   });
//   //? add body to response
//   res.write("<h1>Hello World");
//   //? terminate http connection
//   res.end();
// });

// //? listen for traffic on port 3000
// server.listen(3000);

// //? this server is configured to serve the home page only to the "/" url
// const server = http.createServer((req, res) => {
//   if(req.url == "/"){
//     res.writeHead(200, {
//       'content-type': 'text/html'
//     });
//     res.write("<h1>Hello World");
//   } else{
//     res.writeHead(404, {
//       'content-type': 'text/html'
//     });
//     res.write("<h1>Page Not Found");
//   }
//   res.end();
// });

// server.listen(3000);

