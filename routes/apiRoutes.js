const path = require('path');
const save = require('../db/save');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    save
    .getNotes()
    .then((notes)=>{
        return res.join(notes);
    })
    .catch((err)=> res.status(500).json(err));
    // res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.post('/api/notes', (req, res) => {
    save
        .addNote(req.body)
        .then((note)=>req.json(note))
        .catch((err)=>res.status(500).json(err));
    // res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = router