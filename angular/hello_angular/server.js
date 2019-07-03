const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./routes')(app);

app.listen(8000, function(){
    console.log("Listening on post 8000")
});