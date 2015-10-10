var request = require('request');
var $ = require('jquery');

// where does the main work of the bot happen?
$('#jethro-submit').click(function(){
  request('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=spongebob', function(err, res, body){
    if(!err && res.statusCode === 200){
      var url = JSON.parse(body).data.image_url;
      $('body').append('<img src="' + url + '">' );
    };
  });
})
