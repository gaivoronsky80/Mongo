const controller = require("./controller")

module.exports = function(app){
	app.get('/', controller.index)
	app.get('/products', controller.listProducts)
	app.post('/products/new', controller.createPage)
	app.put('/products/edit/:id', controller.editPage)
	app.delete('/products/delete/:id', controller.deletePage)
}
