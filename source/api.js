const express = require("express");
const router = express.Router();
const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);


router.get("/notes", function(req,res){
    return readFileAsync("db/db.json", "utf8")
    .then (notes => {
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err){
            parsedNotes = [];
        }
        return parsedNotes;
    })
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", function(req,res){
    const newNote = { title, text, id: notes.length};
    return readFileAsync("db/db.json", "utf8")
    .then (notes => {
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err){
            parsedNotes = [];
        }
        return parsedNotes;
    })
    .then(notes => notes.push(newNote))
    .then(updatedNotes => writeFileAsync("db.db.json", JSON.stringify(updatedNotes)))
    .then(() => newNote)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.delete("/notes/:id", function(req,res){
    return readFileAsync("db/db.json", "utf8")
    .then (notes => {
        let parsedNotes;
        try {
            parsedNotes = [].concat(JSON.parse(notes));
        } catch (err){
            parsedNotes = [];
        }
        return parsedNotes;
    })
    .then(notes => notes.filter(note => note.id !== id))
    .then(filteredNotes => writeFileAsync("db.db.json", JSON.stringify(filteredNotes)))
    .then(notes => res.json({ delete: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;