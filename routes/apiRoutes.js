const router = require("express").Router();
const fs = require("fs")
const db = require("../db/db.json");

router.get("/api/notes", (req, res) => {
    return res.json(db)
})

router.post("/api/notes", (req, res) => {
    console.log(req.body)
    db.push(req.body)
    fs.writeFile("./db/db.json", JSON.stringify(db), err => {
        if (err) throw err;
    })
    return res.json(db)
})

module.exports = router