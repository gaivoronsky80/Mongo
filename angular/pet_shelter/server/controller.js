const Pet = require("./models");
const path = require("path");

module.exports = {
    index: (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    },
    
    allPets: (req, res) => {
        Pet.find({})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    }, 
    
    createPet: (req, res) => {
        Pet.create(req.body)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },
    
    showPet: (req, res) => {
        Pet.findById(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },

    editPet: (req, res) => {
        Pet.findByIdAndUpdate(req.params.id, req.body, {runValidators: true, context: 'query'})
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    },

    adoptPet: (req, res) => {
        Pet.findByIdAndRemove(req.params.id)
            .then(data=>res.json(data))
            .catch(err=>res.json(err))
    }
 }



