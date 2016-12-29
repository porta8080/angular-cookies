var app = require('express')();
var request = require('request');

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

app.listen(3000,function(){
  console.log('3000');
});
