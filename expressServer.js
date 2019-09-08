const express = require('express');

const server = express();
server.listen(3000);
console.log("Server started: Listening on PORT 3000");

//? this server responds to any url on localhost:3000
server.all("*", (req, res) => {
  res.send("<h1>Hello World from Express");
});
