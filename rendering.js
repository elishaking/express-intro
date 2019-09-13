const express = require("express");

const server = express();

server.listen(3000);

// serve up static files
server.use(express.static('public'));
// parse json and urlencoded data into req.body
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.set("view engine", "ejs");

server.get('/', (req, res, next) => {

});
