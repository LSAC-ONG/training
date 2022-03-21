const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InfoSchema = new Schema({

    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    ages: {
        type: Number
    }
})

module.exports = mongoose.model("Details", InfoSchema);
