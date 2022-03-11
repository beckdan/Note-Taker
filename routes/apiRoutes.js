const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
    store
    .getNotes()
    .then((notes)=>{
        return res.json(notes);
    })
    .catch((err)=> res.status(500).json(err));
    // res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.post('/notes', (req, res) => {
    store
        .addNote(req.body)
        .then((note)=>req.json(note))
        .catch((err)=>res.status(500).json(err));
    // res.sendFile(path.join(__dirname, '../public/index.html'))
});


module.exports = router;