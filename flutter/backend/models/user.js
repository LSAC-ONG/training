const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    team: { 
        type: mongoose.Schema.Types.ObjectId
    },
    role: {
        type: String,
        required: true,
        default: 'none'
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const users = mongoose.model('User', userSchema);

module.exports = users;
