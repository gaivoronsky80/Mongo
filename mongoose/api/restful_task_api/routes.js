const controller = require("./controller")

module.exports = function(app){
	app.get('/task', controller.index)
	app.get('/task/:id', controller.show_one_task)
	app.post('/task', controller.create_a_task)
	app.put('/task/:id', controller.update_a_task)
	app.delete('/task/:id', controller.delete_a_task)
}
