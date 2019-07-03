    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/ninja_gold_angular');
    
    const GameSchema = new mongoose.Schema({
        userName: { type: String }, 
        score: { type: Number, default: 0 }
    }, 
    { timestamps: true })

    mongoose.model('Game', GameSchema);
    const Game = mongoose.model('Game');
    
    module.exports = Game;
