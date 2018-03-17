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


function addNote(title,body) {
  console.log("adding note...", title, body);
  var notes =[];
  var note = {
    title,
    body
  };

  try {
    var noteString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(noteString);
  }
  catch (error) {
    console.log(error);
  };

  var duplicateNotes = notes.filter((note) => {
    return note.title == title;
  });

  notes.push(note);
  fs.writeFileSync("notes-data.json",JSON.stringify(notes));
};

function getAll() {
  console.log("list notes...");
};

function getNote(title) {
  console.log("getting note...", title);
};

function removeNote(title) {
  console.log("removing note...", title);
};


module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
