//REQUIRE STATMENTS
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');

//APP CONFIGURATION
app.use(flash());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

//ROUTES
require('./routes')(app)

//SERVER LISTEN
app.listen(8000, function(){
    console.log("Listening on post 8000")
});