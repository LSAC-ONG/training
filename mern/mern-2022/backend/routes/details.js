const express = require("express");
const router = express.Router();
const Details = require("./../models/Info");

router.post("/add", async (req, res) => {
    try {
        await Details.create(req.body);
        res.send("Merge boss");
    } catch (err) {
        res.status(500).send("Eroare")
    }
})

router.get("/all", async (req, res) => {
    const people = await Details.find({});
    res.send(people);
})

router.patch("/add/:id/:name", async (req, res) => {
    try {
        const id = req.params.id;
        const firstName = req.body.ages;
        const person = await Details.findById(id);
        person.firstName = firstName;
        await Details.findByIdAndUpdate(id, person);
        res.send("Succes!");
    } catch (err) {
        res.status(500).send("Eroare");
    }
})

// !ORICE OPERATIE PE DB TRB CU AWAIT!
// Post -> Creezi
// Get -> Obtii ceva din DB
// Patch -> Editez unu sau mai multe field-uri din DB
// Delete -> Vreau sa sterg din DB

module.exports = router;