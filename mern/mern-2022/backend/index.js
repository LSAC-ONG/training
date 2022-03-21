const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/Training", () => {
    console.log("Mongoose Initialized");
})

const details = require("./routes/details");
app.use("/api", details);

app.listen(5000, () => {
    console.log("Listening on 5000 port");
})

