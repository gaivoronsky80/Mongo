const User = require("./models")

module.exports = {
    index: function(request, response){
        response.render("index");
    },
    create: function(req,res){
        User.create({name: req.body.name, age: req.body.age}, function(err,data){
            console.log(err);
            console.log(data);
            res.redirect('users');
        })
    },
    users: function(req, res){
        User.find({}, function(err, data) {  
            res.render('users', {users:data});  
        })
    }       
}
