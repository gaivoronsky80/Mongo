    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/petShelter_db', { useNewUrlParser: true});

    const PetSchema = new mongoose.Schema({ 
        petName: {
            type: String,
            minlength: [3, "Name must be at least 3 characters"]
        },
        petType: {
            type: String,
            minlength: [3, "Type must be at least 3 characters"]
        },
        description: {
            type: String,
            minlength: [3, "Description must be at least 3 characters"]
        },
        skills: {
            skillOne: {
                type: String,
                default: ""
            },
            skillTwo: {
                type: String,
                default: ""
            },
            skillThree: {
                type: String,
                default: ""
            },
        }
     }, {timestamps: true})

    module.exports = mongoose.model("Pet", PetSchema)