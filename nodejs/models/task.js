const mongoose = require('mongoose');


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const tasks = mongoose.model('Task', taskSchema);

module.exports = tasks;