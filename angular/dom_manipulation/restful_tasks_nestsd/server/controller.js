const Task = require("./models");

module.exports = {
    index: function(req, res){
        Task.find({}, function(err,data){
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }  
        })
    },

    show_one_task: function(req,res){
        Task.findById({_id: req.params._id}, function(err,data){
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    },

    create_a_task: function(req,res){
        Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed}, function(err,data){
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    },

    update_a_task: function(req,res){
        Task.findByIdAndUpdate(req.params.id,{title: req.body.title, description: req.body.description, completed: req.body.completed}, function(err,data){
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    },

    delete_a_task: function(req,res){
        Task.findByIdAndDelete({_id: req.params.id}, function(err,data){
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    }    
}



