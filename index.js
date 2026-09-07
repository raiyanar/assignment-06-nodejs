const http = require("http");
const fs = require("fs");
const path = require("path");

let filePath = "";
let statusCode = 200;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    filePath = path.join(__dirname, "views", "home.html");
  } else if (req.url == "/blog") {
    filePath = path.join(__dirname, "views", "blog.html");
  } else if (req.url == "/about") {
    filePath = path.join(__dirname, "views", "about.html");
  } else if (req.url == "/contact") {
    filePath = path.join(__dirname, "views", "contact.html");
  } else {
    filePath = path.join(__dirname, "views", "error.html");
    statusCode = 404;
  }
});

server.listen(5000, () => {
  console.log("Server is running on PORT 5000.");
});

/*
Commit
কমপক্ষে ৫টি Meaningful Commit থাকতে হবে।
Example:
Initialize Node Project
Create HTTP Server
Add Home Route
Add Blog, About  & Contact Route
Complete Assignment
Submission Rules: 
Git এ  পুশ করে রিপোজিটরি লিংক দিতে হবে। অবশ্যই লিংক পাবলিক রাখতে হবে। Git Link  ছাড়া যদি আপনি সরাসরি zip আকারে জমা করেন তাহলে 0 পাবেন।  
*/
