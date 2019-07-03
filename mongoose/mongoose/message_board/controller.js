const Message = require("./models");

module.exports = {
    index: function(req, res){
        Message.find({}, function(err, m_data){  
            res.render('index', {m_data});  
        })
    },

    post_message: function(req,res){
        Message.create({name: req.body.name, content: req.body.message}, function(err,m_data){
            if(err) {
                console.log('something went wrong',err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                // redirect the user to an appropriate route 
                console.log(err);
                console.log(m_data);
                res.redirect('/');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
                res.redirect('/');
            }
        })
    }, 

    post_comment: function(req, res){
        Message.findByIdAndUpdate(req.body.message_id, {$push: {comments: {name: req.body.name, content: req.body.comment}}}, {runValidators: true}, function(err,c_data){
            if(err) {
                console.log('something went wrong',err);
                for(var key in err.errors){
                    req.flash('registration', err.errors[key].message);
                }
                // redirect the user to an appropriate route
                console.log(err);
                console.log(c_data);
                res.redirect('/');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
                res.redirect('/');
            }
        })
    }    
}



