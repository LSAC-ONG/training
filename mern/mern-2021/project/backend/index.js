const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*
    {
        username: "a",
        password: "b"
    }

app.post("", () => {});
function f(a) {
    return a + 1;
}
f = (a) => {
    return a + 1;
}

f = (a) => a + 1;
*/

app.get("/hello", function (req, res) {
    return res.json({username: "a"});
});

const messages = require("./routes/messages");
app.use("/api/messages", messages);
// /api/messages + /add

mongoose
    .connect("mongodb://myUserAdmin:user@127.0.0.1:27017",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .catch(err => console.log(`Error ${err}`));


app.listen(5000, function () {
    console.log("hm");
})
