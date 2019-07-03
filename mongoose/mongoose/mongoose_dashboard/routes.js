//REQUIRE CONTROLLER TO HAVE ACCESS TO ROUTE LOGIC
const controller = require("./controller")

//EXPORT ROUTES SO OUR SERVER.JS CAN ACCESS IT
module.exports = function(app){
	app.get('/', controller.index)
	app.get('/dogs/new', controller.new)
	app.post('/dogs', controller.dogs)
	app.get('/dogs/:id', controller.info)
	app.get('/dogs/edit/:id', controller.edit)
	app.post('/dogs/:id', controller.edit_dogs)
	app.get('/dogs/destroy/:id', controller.destroy_dogs)
}
