const controller = require("./controller")
const path = require('path');

module.exports = function(app){ 
    app.get('/api/sharestory.com', controller.home)
    app.post('/api/sharestory.com/registration', controller.signup)
    app.post('/api/sharestory.com/login', controller.login)
    app.get('/api/sharestory.com/:id', controller.user)
    app.get('/api/sharestory.com/:id/posts', controller.main)
    app.post('/api/sharestory.com/edit/:id', controller.edituser)
    app.delete('/api/sharestory.com/delete/:id', controller.deleteuser)

    app.get('/api/sharestory.com/:idAuthor/post/:idPost', controller.getpost)
    app.post('/api/sharestory.com/post/:idAuthor', controller.addpost)
    app.post('/api/sharestory.com/image/:idPost', controller.addimage)
    app.post('/api/sharestory.com/:idAuthor/edit/post/:idPost', controller.editpost)
    app.delete('/api/sharestory.com/delete/post/:idPost', controller.deletepost)

    app.all("*", (req, res, next) => {
        return res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
 }
