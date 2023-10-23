const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: { type: String, require: true },
    desc: {type: String},
    completed: { type: Boolean, default: false },
});

const Todo = mongoose.model('Todo', todoSchema);


module.exports = { Todo };