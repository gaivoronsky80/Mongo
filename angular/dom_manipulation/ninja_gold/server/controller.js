const Game = require("./models");

module.exports = {
    newGame: (req, res) => {
        Game.create({userName: req.body.userName}, function(err,data){
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    },

    getGame: (req, res) => {
        Game.findOne({userName: req.params.userName}, function(err,data){
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    },

    updateGame: (req, res) => {
        Game.findByIdAndUpdate({ _id: req.body._id }, { $set: { score: req.body.score } }, (err, data) => {
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    },

    topFive: (req, res) => {
        Game.find({}).limit(5).sort({ 'score': -1 }).exec((err, data) => {
            if(err){
                res.json(err)
            }
            else{ 
                res.json(data);
            }
        })
    }
}