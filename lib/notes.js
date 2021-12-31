const fs = require('fs');
const path = require('path');

findById = (id, notes) => {
    const result = notes.filter(notes => notes.id === id)[0];
    return result;
}

createNewNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notesArray }, null, 2)
    );
    return note;
};


module.exports = {
    createNewNote,
    findById
};