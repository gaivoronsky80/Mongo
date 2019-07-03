const User = require("./models");
const bcrypt = require ('bcrypt');

module.exports = {
    index: function(req, res){
        res.render ('index') 
    },

    registration: function(req,res){
        User.create({first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, birthday: req.body.birthday})
            res.redirect('/dashboard');
    },

    login: function(req,res){
        User.find({email: req.body.email})
            res.redirect('/dashboard');
    },

    dashboard: function(req,res){
        res.render('dashboard', {data:req.session});
    },

    logout: function(req,res){
        req.session.destroy();
    }
}   




