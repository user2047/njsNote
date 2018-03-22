console.log("Server starting...");

const fs = require("fs");
const os = require("os");
const _ = require("lodash")
const notes = require("./notes.js");
const yargs = require("yargs");


var command = process.argv[2]
console.log("Command: ", command);
//
console.log(process.argv);
// console.log(yargs.argv)

const argv = yargs.argv



if (command == "add") {
  console.log("adding new note...");
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("writing note", note);
  }
  else {
    console.log("note",argv.title, "already exists")
  }
}
  else if (command == "list") {
  console.log("listing notes...");
  var allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
}
  else if (command =="read") {
    console.log("reading note...");
    console.log(notes.getNote(argv.title));
    var note = notes.getNote();
    if (note) {
      console.log(note);
    }
    else {
        console.log("note not found");
      }
  }
  else if (command == "remove") {
    console.log("removing note...");
    var noteRemoved = notes.removeNote(argv.title);
    var message =noteRemoved ? "Note was removed" : "Note not removed";
    console.log(message);
  }
  else {
    console.log("Command not recognized");
  }
