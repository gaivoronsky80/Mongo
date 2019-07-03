const controller = require("./controller")

module.exports = function(app){
	app.post('/game', controller.newGame)
	app.get('/game/:userName', controller.getGame)
	app.put('/game/update', controller.updateGame)
	app.get('/game/topFive', controller.topFive)
}

