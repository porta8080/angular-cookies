var app = require('express')();
var cors = require('cors');
var session = require('express-session');

app.use(cors({
  origin: ['http://localhost:3001'],
  credentials: true
}));

app.use(session({ secret: 'full-api', saveUninitialized: true, resave: false, cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }}));

app.get('/login',function(req,res){
  req.session.user = {create_at: Date.now()};
  res.json(req.session.user);
  console.log(res._header)
});

app.get('/check',function(req,res){
  res.json(req.session.user);
  console.log(req.session.user);
});

app.listen(8080,function(){
  console.log('8080');
});
