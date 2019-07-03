//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
	app.get('/', controller.index)
	app.post('/registration', controller.registration)
	app.post('/session', controller.login)
	app.get('/dashboard', controller.dashboard)
	app.get('/logout', controller.logout)
}
