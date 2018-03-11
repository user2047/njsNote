console.log("Server starting...");
const fs = require("fs");
const os = require("os");
const notes = require("./notes.js");

var user = os.userInfo();
console.log("Hello " + user.username);

fs.appendFile("greetings.txt", "Hello ${user.username}, you are ${notes.age}!", (err) => {
  if (err) {
    console.log("unknown error");
  }});
