const express = require('express');
const helmet = require('helmet');

const server = express();

//? BASIC SECURITY
server.use(helmet());

//? MAKE THE PUBLIC DIRECTORY ACCESSIBLE
server.use(express.static('public'));

//? 2 MIDDLE-WARES FOR PARSING REQUEST BODY(DATA)
//? They are responsible for creating the req.body object, parsing the data in the request and adding it to the created req.body object
server.use(express.json()); // Parses Data with a mime-type of application/json
server.use(express.urlencoded({extended: false})); // Parses data with a mime-type of application/x-www-form-urlencoded

server.listen(3000);
console.log("Server started: Listening on PORT 3000");

//? ROUTING IS MEANT TO HANDLE HTTPS REQUESTS - SPECIFICALLY, THE TYPE OF HTTP REQUEST AND THE PATH (URL) OF THE REQUEST

// //? this server responds to any url on localhost:3000
// server.all("*", (req, res) => {
//   res.send("<h1>Hello World from Express");
// });

//? CUSTOM MIDDLE-WARE FUNCTIONS
//? This functions runs before any of the other middle-ware functions: all above included
server.use((req, res, next) => {
  res.locals.validated = true;
  console.log(`res.locals.validated set to ${res.locals.validated}`);
  next();
});

//? ALL BROWSERS SEND GET REQUESTS BY DEFAULT
//? REQUEST DATA FROM THE SERVER
server.get("/", (req, res) => {
  console.log(res.locals.validated);
  res.send("<h1>Hello World: GET</h1>");
});

//? SEND DATA / CREATE DATA ON THE SERVER
server.post("/", (req, res) => {
  res.send("<h1>Hello World: POST</h1>");
});

//? UPDATE EXISTING DATA ON THE SERVER
server.put("/", (req, res) => {
  res.send("<h1>Hello World: PUT</h1>");
});

//? DELETE EXISTING DATA ON THE SERVER
server.delete("/", (req, res) => {
  res.send("<h1>Hello World: DELETE</h1>");
});

//? 404 PAGE
server.all("*", (req, res) => {
  res.send("<h1>404 Page not Found</h1>");
});
