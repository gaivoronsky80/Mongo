const controller = require("./controller");
const path = require('path');

module.exports = function(app){ 
    app.get('/authors', controller.allAuthors)
    app.post('/author/new', controller.newAuthor)
    app.get('/quotes/:id', controller.showAuthor)
    app.post('/author/edit/:id', controller.editAuthor)
    app.delete('/author/delete/:id', controller.deleteAuthor)

    
    app.post('/write/:idAuthor', controller.newQuote)
    app.post('/edit/:idQuote', controller.editQuote)
    app.delete('/delete/:idQuote', controller.deleteQuote)

    app.all("*", (req, res) => {
		return res.sendFile(path.resolve("./public/dist/public/index.html"));
	});
 }
