const Product = require("./models");

module.exports = {
    index: (req, res) => {
    },

    listProducts: (req, res) => {
        Product.find()
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    }, 
    
    createPage: (req, res) => {
        Product.create(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },

    editPage: (req, res) => {
        Product.findByIdAndUpdate(req.params.id,{title: req.body.title, price: req.body.price, img: req.body.img}, {runValidators: true})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },

    deletePage: (req, res) => {
        Product.findByIdAndDelete(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    }
}



