// console.log("starting notes.js");
// module.exports.age = 21
// module.exports.addNote = () => {
//   console.log("added note");
//   return "new note";
// }
// module.exports.add = (a,b) => {
//   return a+b;
// }
console.log("starting notes.js...")
function addNote(title,body) {
  console.log("adding note...",title,body);

}
function getAll() {
  console.log("listing all...");
}


module.exports = {
  addNote
  getAll
};
