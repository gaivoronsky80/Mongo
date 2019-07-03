const Dog = require("./models")

module.exports = {
    index: function(req, res){
        Dog.find({}, function(err, data){  
            res.render('index', {dogs:data});  
        })
    },

    new: function(req, res){  
        res.render('new');
    },

    dogs: function(req,res){
        Dog.create({type: req.body.type, desc: req.body.desc}, function(err,data){
            console.log(err);
            console.log(data);
            res.redirect('/');
        })
    },

    info: function(req, res){
        Dog.findById({_id: req.params.id}, function(err, data){  
            res.render('info', {data});  
        })
    },

    edit: function(req, res){
        Dog.findById({_id: req.params.id}, function(err, data){  
            res.render('edit', {data});
        })
    },

    edit_dogs: function(req, res){
        Dog.findByIdAndUpdate({_id: req.params.id}, {type: req.body.type, desc: req.body.desc}, function(err, data){
            res.redirect('/');
        })
    },

    destroy_dogs: function(req, res){
        Dog.findByIdAndDelete({_id: req.params.id}, function(err, data){
            res.redirect('/');
        })
    }       
}

