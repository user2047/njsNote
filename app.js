console.log("Server starting...");
const fs = require("fs");
const os = require("os");

var user = os.userInfo();
console.log("Hello " + user.username);

fs.appendFile("greetings.txt", "Hello" + user.username + "!", (err) => {
  if (err) {
    console.log("unknown error");
  }});
