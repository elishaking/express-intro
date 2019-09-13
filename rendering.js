const express = require("express");
const path = require("path");
const helmet = require("helmet");

const server = express();

server.listen(3000);

// basic security
server.use(helmet());

// serve up static files
server.use(express.static('public'));
// parse json and urlencoded data into req.body
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));

server.get('/', (req, res, next) => {
  res.render("index");
});
