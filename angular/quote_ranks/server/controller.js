const Author = require("./models");

module.exports = { 
    allAuthors: (req, res) => {
        Author.find()
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    newAuthor: (req, res) => {
        Author.create(req.body)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    showAuthor: (req, res) => {
        Author.findById(req.params.id)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    editAuthor: (req, res) => {
        Author.findByIdAndUpdate(req.params.id, {name: req.body.author.name}, {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    newQuote: (req, res) => {
        console.log(req.body)
        Author.findByIdAndUpdate(req.params.idAuthor, {$push: {quotes: {content: req.body.content}}}, {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    editQuote: (req, res) => {
        if (req.body.value > 0) {
            Author.findOneAndUpdate({'quotes._id': req.params.idQuote}, {$inc: {'quotes.$.vote': 1}})
            .then(data => res.json({success: true, data: data}))
            .catch(err => res.json({success: false, error: err}));
        }
        else{
            Author.findOneAndUpdate({'quotes._id': req.params.idQuote}, {$inc: {'quotes.$.vote': -1}})
            .then(data => res.json({success: true, data: data}))
            .catch(err => res.json({success: false, error: err}));
        }
    },

    deleteQuote: (req, res) => {
        Author.findOneAndUpdate({'quotes._id': req.params.idQuote}, {$pull: {quotes: {'_id': req.params.idQuote}}})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    }
 }



