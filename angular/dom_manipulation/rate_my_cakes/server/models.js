    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/rate_my_cake_db');
    
    const ReviewSchema = new mongoose.Schema({
      comment: {type: String, minlength:[3, "Your comment must be at least 3 characters"]}, 
      rate: {type: Number, min: 1, max: 5}
    })

    const CakeSchema = new mongoose.Schema({
      baker: {type: String, minlength:[3, "Your name must be at least 3 characters"]}, 
      img: {type: String, required: true, minlength: 10},
      reviews: [ReviewSchema]
    })

    module.exports = mongoose.model("Cake", CakeSchema)