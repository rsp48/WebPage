const express = require('express');
const path = require('path');
const app = express();

//app.use(express.static('./build'));

app.get('/', function (req, res) {
  res.send("Hello")
  //res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(3000);