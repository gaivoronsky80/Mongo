////MODULARIZATION WITH MODELS:
    ////the models file will contain all of the mongoose connection and schema definitions

    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/mongoose_dashboard');
    var DogSchema = new mongoose.Schema({
        type: String,
        desc: String
    })
    mongoose.model('Dog', DogSchema); // We are setting this Schema in our Models as 'User'
    var Dog = mongoose.model('Dog');

    ////Export User so Controllers has access to it
    module.exports = Dog;