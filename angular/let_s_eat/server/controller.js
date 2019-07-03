const Restaurant = require("./models");

module.exports = { 
    allRestaurants: (req, res) => {
        Restaurant.find()
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    newRestaurant: (req, res) => {
        Restaurant.create(req.body)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    showRestaurant: (req, res) => {
        Restaurant.findById(req.params.id)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    editRestaurant: (req, res) => {
        Restaurant.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    deleteRestaurant: (req, res) => {
        Restaurant.findByIdAndDelete(req.params.id)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },

    newReview: (req, res) => {
        console.log(req.body)
        Restaurant.findByIdAndUpdate(req.params.idAuthor, {$push: {reviews: {name: req.body.name, description: req.body.description, stars: req.body.stars}}}, {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
 }



