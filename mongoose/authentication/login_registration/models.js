    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/login_registration');
    
    const UserSchema = new mongoose.Schema({
      first_name: {type: String},
      last_name: {type: String},
      email: {type: String},
      password: {type: String},
      birthday: {type: Date},
      created_at: { type: Date, default: Date.now}
    }, {timestamps: true})

    mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
    const User = mongoose.model('User');

    module.exports = User;