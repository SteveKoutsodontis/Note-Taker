const router = require("express").Router();
const fs = require("fs")
const db = require("../db/db.json");
const { v1: uuidv1 } = require('uuid');

//localhost:3001/api/notes GET
router.get("/notes", (req, res) => {
    return res.json(db)
})

//localhost:3001/api/notes POST
router.post("/notes", (req, res) => {
    //console.log(req.body)
    // create new object with id to push
    const note = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv1()
    }

    db.push(note);

    fs.writeFile("./db/db.json", JSON.stringify(db), err => {
        if (err) throw err;
    })
    return res.json(db);
});

router.delete('/notes/:id', (req, res) => {

    for(i=0; i< db.length; i++){
        if(idChosen == db[i].id){
            db.splice(i,1)
        }
    }
    fs.writeFile("./db/db.json", JSON.stringify(db), err => {
        if (err) throw err;
    })
    return res.json(db)
});

module.exports = router