// console.log("starting notes.js");
// module.exports.age = 21
// module.exports.addNote = () => {
//   console.log("added note");
//   return "new note";
// }
// module.exports.add = (a,b) => {
//   return a+b;
// }
console.log("starting notes.js...");


function addNote(title,body) {
  console.log("adding note...", title, body);
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
