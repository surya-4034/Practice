//core modules
const path = require('path');
const fs = require('fs');

//local modules
const rootdir = require('../utility/path');

//npm modules
const express = require('express');

const app = express();
const userForm = express.Router();

userForm.get("/details", (req, res) => {
  console.log("details page");
  res.sendFile(path.join(rootdir, 'views', 'details.html'));
});

userForm.post("/details", (req, res) => {
  console.log("user details submitted");
  console.log(req.body);
  const { username, email } = req.body;
  const data = `Username: ${username}, Email: ${email}\n`;
  fs.appendFile(path.join(rootdir, 'message.txt'), data, (err) => {
    if (err) {
      return res.send('Error saving details');
    }
   res.send( `<!DOCTYPE html>
    <html>
    <head>
    <style>
    .h{
      text-align:center;
      border:2px solid black;
      border-radius:10px;
      padding:20px;
      margin:20px;
   } </style>
    <title>Details Saved</title>
    </head>
    <body>
    <h1>Details saved successfully!</h1>
    <div class=h><p>Username: ${username}</p>
    <p>Email: ${email}</p>
    <a href="/details">Go back to Details Page</a></div>
    
     `);
  
  });
});
  

module.exports = userForm;