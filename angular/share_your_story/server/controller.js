const User = require("./models");

module.exports = { 
    home: (req, res) => { 
        User.find()
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    signup: (req, res) => { 
        User.create(req.body)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    login: (req, res) => { 
        console.log(req.body)
        User.findOne({email: req.body.email, password: req.body.password})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    user: (req, res) => {
        User.findById(req.params.id)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    edituser: (req, res) => {
        User.findByIdAndUpdate(req.params.id, {fname: req.body.user.fname, 
            lname: req.body.user.lname, username: req.body.user.username, 
            email: req.body.user.email}, {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    deleteuser: (req, res) => {
        User.findByIdAndDelete(req.params.id)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    addpost: (req, res) => {
        User.findByIdAndUpdate(req.params.idAuthor, {$push: {posts: {title: req.body.title, 
            description: req.body.description, location: req.body.location, 
            direction: req.body.direction, images: {img: req.body.img}}}}, {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    getpost: (req, res) => {
        User.findById(req.params.idPost, req.params.idAuthor)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    editpost: (req, res) => {
        User.findByIdAndUpdate(req.params.idAuthor, req.params.idPost, {$push: {posts: {title: req.body.title, 
            description: req.body.description, location: req.body.location, 
            direction: req.body.direction, images: {img: req.body.img}}}}, {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    addimage: (req, res) => {
        console.log(req.body)
        User.findByIdAndUpdate(req.params.idPost, {$push: {posts: {images: {img: req.body.img}}}}, 
            {runValidators: true})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    deletepost: (req, res) => {
        User.findOneAndUpdate({'posts._id': req.params.idPost}, {$pull: {posts: {'_id': req.params.idPost}}})
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    },
    main: (req, res) => {
    User.find(req.params.id)
        .then(data => res.json({success: true, data: data}))
        .catch(err => res.json({success: false, error: err}));
    }
}



