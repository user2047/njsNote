// console.log("starting notes.js");
// module.exports.age = 21
// module.exports.addNote = () => {
//   console.log("added note");
//   return "new note";
// }
// module.exports.add = (a,b) => {
//   return a+b;
// }
const fs = require("fs");

console.log("starting notes.js...");

function fetchNotes() {
  try {
    var noteString = fs.readFileSync("notes-data.json");
    return JSON.parse(noteString);
  }
  catch (error) {
    console.log(error);
    return [];
  };
}

function saveNotes(notes) {
  fs.writeFileSync("notes-data.json",JSON.stringify(notes));

}



function addNote(title,body) {
  console.log("adding note...", title, body);
  var notes =fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter((note) => {
    return note.title == title;
  });
    if (duplicateNotes.length ===0) {
      notes.push(note);
      saveNotes(notes);
      return note;
    }

};

function getAll() {
  console.log("list notes...");
  return fetchNotes();
};

function getNote(title) {
  console.log("getting note...", title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title == title);
  return filteredNotes[0];
};

function removeNote(title) {
  console.log("removing note...", title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

function logNote(note) {
  console.log("--");
  console.log(`Title: ${note.title}`)
  console.log(`Body: ${note.body}`)
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
