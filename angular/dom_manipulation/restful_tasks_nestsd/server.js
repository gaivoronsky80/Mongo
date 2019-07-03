const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/dist/public')));
app.set('server', path.join(__dirname, './server'));
require('./server/routes')(app);


app.listen(8000, function(){
    console.log("Listening on post 8000")
});