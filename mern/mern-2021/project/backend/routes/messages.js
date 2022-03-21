const router = require("express").Router();
const Message = require("../models/Message");

/*
* async function f() {
*   await g();
* }
*
* var x - deprecated
* const
* let
* */

router.get("/all", async (req, res) => {
    Message.find({}, async (error, messages) => {
        if (error) {
            console.log(error);
        }
        console.log(`Messages: ${messages}`);
    });
    return res.json({text: "ok"});
});

// Sa mai redeschideti terminalul din cand in cand, de asta nu mergea :(
router.post("/add", async (req, res) => {
    console.log(req.body);
    const newMessage = new Message({text: req.body.text});
    await newMessage.save(error => {
        if (error) {
            console.log("of");
        }
    })
    return res.json({text: "ok"});
});

module.exports = router;
