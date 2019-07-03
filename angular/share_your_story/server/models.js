    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/share_your_story_db');
    mongoose.set('useFindAndModify', false);

    const CommentSchema = new mongoose.Schema({ 
        content: {
            type: String,
            required: true
        },

        stars: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        }
        },{
            timestamps: true
        })

    const ImageSchema = new mongoose.Schema({
        img: {
            type: String,
            required: true
        }
        })

    const PostSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        }, 
        description: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            required: true
        },
        images: [ImageSchema]
        },{
            timestamps: true
        })

    const UserSchema = new mongoose.Schema({ 
        fname: {
            type: String,
            required: true
        },
        lname: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        comments: [CommentSchema],
        posts: [PostSchema]
        },{
            timestamps: true
        });
    
        module.exports = mongoose.model("User", UserSchema)