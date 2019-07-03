const controller = require("./controller")

module.exports = function(app){
    app.all('', controller.index) 
    app.get('/pets', controller.allPets)
	app.post('/pets/new', controller.createPet)	
	app.get('/pets/:id', controller.showPet)
    app.put('/pets/edit/:id', controller.editPet)
    app.delete('/pets/:id', controller.adoptPet)
 }
