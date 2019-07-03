const controller = require("./controller")

module.exports = function(app){
	app.get('/', controller.index)
	app.get('/new/:name', controller.add_name)
	app.get('/remove/:name', controller.delete_name)
	app.get('/:name', controller.info_name)
}
