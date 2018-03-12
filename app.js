console.log("Server starting...");

const fs = require("fs");
const os = require("os");
const _ = require("lodash")
const notes = require("./notes.js");

console.log(_.isString("asdf"));

var filteredArray = _.uniq([1,1,2,2,3,3,4,4]);
console.log(filteredArray)



var result = notes.addNote();
console.log(result);

var res2 =notes.add(5,6);
console.log(`Result: ${res2}`);

// var user = os.userInfo();
// console.log("Hello " + user.username);
//
// fs.appendFile("greetings.txt", `Hello ${user.username}, you are ${notes.age}!`, (err) => {
//   if (err) {
//     console.log("unknown error");
//   }});
