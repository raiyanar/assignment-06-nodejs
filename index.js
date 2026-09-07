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

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("Internal Server Error.");
      return;
    }

    res.writeHead(statusCode, { "content-type": "text/html" });
    res.end(data);
  });
});

server.listen(5000, () => {
  console.log("Server is running on PORT 5000.");
});
