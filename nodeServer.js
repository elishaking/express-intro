const http = require('http');
const fs = require('fs'); //? gives access to servers(this computers) file system

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

// //? this server is configured to read html files and serve them
// const server = http.createServer((req, res) => {
//   if(req.url == "/"){
//     res.writeHead(200, {
//       'content-type': 'text/html'
//     });
//     const homePageHTML = fs.readFileSync('node.html');
//     res.write(homePageHTML);
//   } else{
//     res.writeHead(404, {
//       'content-type': 'text/html'
//     });
//     res.write("<h1>Page Not Found");
//   }
//   res.end();
// });

// server.listen(3000);

//? this server is configured to serve static files
const server = http.createServer((req, res) => {
  console.log("request: " + req.url);
  if(req.url == "/"){
    res.writeHead(200, {
      'content-type': 'text/html'
    });
    const homePageHTML = fs.readFileSync('node.html');
    res.write(homePageHTML);
  } else if(req.url.indexOf('/img/node.svg') != -1){
    res.writeHead(200, {
      'content-type': 'image/svg+xml'
    });
    const img = fs.readFileSync("img/node.svg");
    res.write(img);
  } else if(req.url.indexOf('/css/style.css') != -1){
    res.writeHead(200, {
      'content-type': 'text/css'
    });
    const css = fs.readFileSync("css/style.css");
    res.write(css);
  } else{
    res.writeHead(404, {
      'content-type': 'image/*'
    });
    res.write("<h1>Page Not Found");
  }
  res.end();
});

server.listen(3000);
