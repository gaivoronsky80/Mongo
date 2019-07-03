    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/restaurants_db');
    mongoose.set('useFindAndModify', false);

    const ReviewSchema = new mongoose.Schema({ 
        name: {
            type: String,
            required: true
        },
        description: {
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

    const RestaurantSchema = new mongoose.Schema({ 
        name: {
            type: String,
            required: true
        },
        cuisine: {
            type: String,
            required: true
        },
        reviews: [ReviewSchema]
     },{
         timestamps: true
     });

    module.exports = mongoose.model("Restaurant", RestaurantSchema)