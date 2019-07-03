const controller = require("./controller")
const path = require('path');

module.exports = function(app){     
    app.get('/restaurants', controller.allRestaurants)
    app.post('/restaurants/new', controller.newRestaurant)
    app.get('/restaurants/:id', controller.showRestaurant)
    app.put('/restaurants/edit/:id', controller.editRestaurant)
    app.delete('/restaurants/delete/:id', controller.deleteRestaurant)


    app.post('/restaurants/review/:idAuthor', controller.newReview)

    app.all("*", (req, res) => {
        return res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
}