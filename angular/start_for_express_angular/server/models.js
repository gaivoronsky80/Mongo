    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/name_db');

    const NameSchema = new mongoose.Schema({ })

    module.exports = mongoose.model("Name", NameSchema)