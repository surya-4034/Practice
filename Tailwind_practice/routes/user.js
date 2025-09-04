//core modules
const path = require('path');

//local modules
const rootdir = require('../utility/path');

//npm modules
const express = require('express');

const app = express();
const user = express.Router();

user.get("/", (req, res) => {
  console.log("home page");
  res.sendFile(path.join(rootdir, 'views', 'home.html'));
});


module.exports = user;