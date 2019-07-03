    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/restful_task_api');
    
    
    const TaskSchema = new mongoose.Schema({
      title: {type: String}, description: {type: String}, completed: {type: Boolean, default: false}
    }, {timestamps: true})

    mongoose.model('Task', TaskSchema);
    const Task = mongoose.model('Task');

    module.exports = Task;