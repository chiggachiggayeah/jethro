'use strict'
var J = require('./jethro_modules');

/****JETHRO****/
/*
* Should parse command box and call appropriate function
*
*/


exports.parse = (input) => {
  var commandList = ['gifme']; // <-- ideally will be in the db
  // console.log("My input: %s", input);

  var terms = input.split(" ");
  if(commandList.indexOf(terms[0]) != -1){
    console.log(typeof(J.gifme));
    return J.gifme(terms[1]);
  }
}
