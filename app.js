var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var routes = express.Router();
var port = 8080;

app.use('./js', express.static(__dirname + '/js'));
var Jethro = require('./js/bot.js');
console.log(typeof(Jethro.parse));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

var aString = "gobblygook";
for(var chr of aString){
  console.log(chr);
};

/****SOCKET IO STUFF****/
io.on('connection', function(socket){
  console.log('connection');
  socket.on('jethro-input', function(inp, fn){
    Jethro.parse(inp).then(function(val){
      fn(val);
    });
  });
});

app.use('/comp/js', express.static(__dirname + '/comp/js'));

http.listen(8080);
