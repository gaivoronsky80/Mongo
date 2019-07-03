    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/product_manager_db');

    const ProductSchema = new mongoose.Schema({
      title: {type: String, minlength:[3, "Your name must be at least 3 characters"]},
      price: {type: Number, minlength: 1}, 
      img: {type: String, required: true, minlength: 10}
    })

    module.exports = mongoose.model("Product", ProductSchema)