    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/1955');
    
    
    const Born_inSchema = new mongoose.Schema({
      name: {type: String}
    }, {timestamps: true})

    mongoose.model('Born_in', Born_inSchema);
    const Born_in = mongoose.model('Born_in');

    module.exports = Born_in;