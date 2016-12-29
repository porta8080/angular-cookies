var request = require('request');
var express = require('express');
var fs = require('fs');

var app = express();

app.get('/check',function(req,res){
  var options = {
    url : 'http://localhost:8080/login-back'
  };

  if(readCookie()){
    options.headers = {
      'cookie': readCookie()
    };
  }

  request(options, function(error,response,body) {
    if(!error){
      if('set-cookie' in response.headers){
        var cookie_string = response.headers['set-cookie'][0].split(';')[0];
        console.log(cookie_string);
        saveCookie(cookie_string);
      }

      res.json({ body: body, cookie: readCookie() });
    }
  });
});

app.listen(8090, function(){
  console.log('8090');
});

function saveCookie(value){
  fs.writeFileSync('cookie',value);
}

function readCookie(){
  if(fs.existsSync('cookie')) return fs.readFileSync('cookie','utf8');
  return false;
}
