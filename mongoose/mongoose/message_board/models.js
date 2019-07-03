    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/message_board');
    
    
    const CommentSchema = new mongoose.Schema({
      name: {type: String, required: true, minlength: 2},
      content: {type: String, required: true, min: 3, max: 250},
    }, {timestamps: true})

    mongoose.model('Comment', CommentSchema); // We are setting this Schema in our Models as 'User'
    const Comment = mongoose.model('Comment');

    const MessageSchema = new mongoose.Schema({
      name: {type: String, required: true, minlength: 2},
      content: {type: String, required: true, min: 3, max: 250},
      comments: [CommentSchema]
    }, {timestamps: true})

    mongoose.model('Message', MessageSchema);
    const Message = mongoose.model('Message');

    module.exports = Message;