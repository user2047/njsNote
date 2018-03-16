const fs = require("fs");
var originalNote = {
  title: "some title",
  body: "some body"
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

var noteString = fs.readFileSync("notes.json");

var note = JSON.parse(noteString);

console.log(note.title);
