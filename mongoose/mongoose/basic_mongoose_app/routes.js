//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
	app.get('/', controller.index)
	app.post('/create', controller.create)
	app.get('/users', controller.users)
}

