const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true
    }
});

/*
* mongodb -> mai multe databases
* fiecare database => mai multe colectii (users vs teams)
* colectie => mai multe documente
* */

module.exports = mongoose.model("messages", MessageSchema);
