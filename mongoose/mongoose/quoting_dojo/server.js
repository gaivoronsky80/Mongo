var express = require('express');
var app = express();
var session = require('express-session');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');

var UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    quote: { type: String, required: true, min: 3, max: 250 },
    created_at: { type: Date, default: Date.now}
}, {timestamps: true });

app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'User'
var User = mongoose.model('User') // We are retrieving this Schema from our Models, named 'User'

mongoose.Promise = global.Promise;

const flash = require('express-flash');
app.use(flash());
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name: req.body.name, quote: req.body.quote});
    user.save(function(err) {
        if(err) {
            console.log('something went wrong',err);
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
            res.redirect('/quotes');
        }
        
    })
})

var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request

app.get('/', function(req, res) {
        res.render('index');
})

app.get('/quotes', function(req, res) {
    User.find({}, function(err, users) {
        console.log(users)
        res.render('quotes',{ users: users});
    })
})

// app.post('/quotes', function(req, res) {
//     User.create({name: req.body.name, quote: req.body.quote}, function(err, users) {
//         console.log(users)
//         res.redirect('quotes');
//     })
// })

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})