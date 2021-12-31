const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
let notes = require('../../db/db.json');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

//integrated uuid npm pacakge and reworked library/notesRoutes files to make id work
router.post('/notes', (req, res) => {
    note = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    }
    createNewNote(note, notes);
    res.json(notes);
});

module.exports = router;


// router.get('/notes/:id', (req, res) => {
//     const result = findById(req.params.id, aniamls);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });

// router.post('/notes', (req, res) => {
//     req.body.id = notes.length.toString();
//     const note = createNewNote(req.body, notes);
//     res.json(note);
// });