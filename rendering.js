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

server.set("view engine", "hbs");
server.set("views", path.join(__dirname, "views"));

server.get('/ejs', (req, res, next) => {
  if(server.get("view engine") == "ejs") res.render("ejs/index");
  else res.send(`<p>EJS is not the templating engine<br>Use <strong>${server.get("view engine")}</strong></p>`);
});

server.get('/hbs', (req, res, next) => {
  if(server.get("view engine") == "hbs") res.render("hbs/index");
  else res.send(`<h1>HBS is not the templating engine<br>Use <strong>${server.get("view engine")}</strong></h1>`);
});
