const controller = require("./controller")

module.exports = function(app){
	app.get('/cakes', controller.all_cakes)
	app.post('/cakes', controller.create_a_cake)	
	app.get('/cakes/:id', controller.show_one_cake)
	app.patch('/cakes/:id', controller.review_a_cake)
}
