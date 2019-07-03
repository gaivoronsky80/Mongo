const Born_in = require("./models");

module.exports = {
    index: function(req, res){
        Born_in.find({}, function(err,data){ 
            res.json({message: 'Success', data: data});  
        })
    },

    add_name: function(req,res){
        Born_in.create({name: req.params.name}, function(err,data){
            res.json({message: 'Success', data: data});
        })
    },

    delete_name: function(req,res){
        Born_in.findOneAndDelete({name: req.params.name}, function(err,data){
            res.json({message: 'Success', data: data});
        })
    },

    info_name: function(req,res){
        Born_in.find({name: req.params.name}, function(err,data){
            res.json({message: 'Success', data: data});
        })
    }    
}



