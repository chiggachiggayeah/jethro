'use strict'

var req = require('request');


exports.gifme = (query) => {
  // console.log('running');
  return new Promise(function(resolve, reject){
    req('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + query, function(err, res, body){
      if(!err && res.statusCode === 200){
        var url = JSON.parse(body).data.image_url;
        resolve(url);
      };
    });
  });
}


// console.log(jethroModules.gifme('spongebob'));
