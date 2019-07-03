////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/basic_mongoose');
    var UserSchema = new mongoose.Schema({
        name: String,
        age: Number
    })
    mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
    var User = mongoose.model('User');

    ////Export User so Controllers has access to it
    module.exports = User;