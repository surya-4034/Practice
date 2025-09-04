const express = require('express');
const fs = require('fs');
//core modules
const path = require('path');

//local modules
const rootdir = require('./utility/path');
//routes
const userRoutes = require('./routes/user');
const detailsRoutes = require('./routes/details');

const app = express();

app.use(express.static(path.join(rootdir,"public")));

app.use(express.static("public"));


app.use(express.urlencoded());

app.use(userRoutes);
app.use(detailsRoutes);



app.use((req, res) => {
  res.sendFile(path.join(rootdir, 'views', 'error.html'));
});

app.listen(3000);
console.log("server started at port 3000"); 
