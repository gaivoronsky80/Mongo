const Cake = require("./models");

module.exports = {
    all_cakes: (req, res) => {
        Cake.find()
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    }, 
    
    create_a_cake: (req, res) => {
        Cake.create(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    
    show_one_cake: (req, res) => {
        Cake.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },

    review_a_cake: (req, res) => {
        Cake.findByIdAndUpdate(req.params.id, {$push: {reviews: req.body}}, {runValidators: true, context: 'query'})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
}



