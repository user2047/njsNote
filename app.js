console.log("Server starting...");

const fs = require("fs");
const os = require("os");
const _ = require("lodash")
const notes = require("./notes.js");
const yargs = require("yargs");


var command = process.argv[2]
console.log("Command: ", command);
//
// console.log(process.argv);
// console.log(yargs.argv)

const argv = yargs.argv



if (command == "add") {
  console.log("adding new note...");
  notes.addNote(argv.title, argv.body);
}
  else if (command == "list") {
  console.log("listing notes...");
  notes.getAll();
}
  else if (command =="read") {
    console.log("reading note...");
    notes.getNote(argv.title);

  }
  else if (command == "remove") {
    console.log("removing note...");
    notes.removeNote(argv.title);
  }
  else {
    console.log("Command not recognized");
  }


// console.log(process.argv)






// console.log(_.isString("asdf"));




// var filteredArray = _.uniq([1,1,2,2,3,3,4,4]);
// console.log(filteredArray)
//
//
//
// var result = notes.addNote();
// console.log(result);
//
// var res2 =notes.add(5,6);
// console.log(`Result: ${res2}`);

// var user = os.userInfo();
// console.log("Hello " + user.username);
//
// fs.appendFile("greetings.txt", `Hello ${user.username}, you are ${notes.age}!`, (err) => {
//   if (err) {
//     console.log("unknown error");
//   }});
