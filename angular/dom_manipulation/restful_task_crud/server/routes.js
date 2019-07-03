const controller = require("./controller")

module.exports = function(app){
	app.get('/tasks', controller.index)
	app.get('/tasks/:id', controller.show_one_task)
	app.post('/tasks', controller.create_a_task)
	app.put('/tasks/:id', controller.update_a_task)
	app.delete('/tasks/:id', controller.delete_a_task)
}
