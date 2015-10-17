var request = require('request');
var $ = require('jquery');
var io = require('socket.io-client');
var socket = io();

socket.on('connect', function(){
  console.log('i connected!');
});

// need a neater way to handle this stuff
$('#jethro-submit').click(function(){
  var input = $('#jethro-field').val();
  console.log($('#jethro-field').val() + " field val");
  socket.emit('jethro-input', input, function(url){
    // will have to be way more general
    $('body').append('<img src="' + url + '">' );
  });
});
