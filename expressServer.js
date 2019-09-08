const express = require('express');

const server = express();
server.listen(3000);
console.log("Server started: Listening on PORT 3000");

//? ROUTING IS MEANT TO HANDLE HTTPS REQUESTS - SPECIFICALLY, THE TYPE OF HTTP REQUEST AND THE PATH (URL) OF THE REQUEST

// //? this server responds to any url on localhost:3000
// server.all("*", (req, res) => {
//   res.send("<h1>Hello World from Express");
// });

//? ALL BROWSERS SEND GET REQUESTS BY DEFAULT
server.get("/", (req, res) => {
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
