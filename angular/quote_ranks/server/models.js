    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/quote_ranks_db', { useNewUrlParser: true});
    mongoose.set('useFindAndModify', false);

    const QuoteSchema = new mongoose.Schema({ 
        content: {
            type: String,
            required: true,
            minlength: 3
        },

        vote: {
            type: Number,
            required: true,
            default: 0
        }
     },{
         timestamps: true
     })

    const AuthorSchema = new mongoose.Schema({ 
        name: {
            type: String,
            required: [true, 'Author name must be provided'],
            minlength: 3
        },
        img: {
            type: String, 
            required: true, 
            minlength: 10
        },
        quotes: [QuoteSchema]
     },{
         timestamps: true
     });

    module.exports = mongoose.model("Author", AuthorSchema)