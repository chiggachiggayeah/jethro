var express = require('express');
var app = express();
var routes = express.Router();
var port = 8080;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/comp/js', express.static(__dirname + '/comp/js'));

app.listen(8080);
