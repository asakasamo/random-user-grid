/**
 * server.js - A simple Node web server that serves index.html to localhost:3000.
 */
const http = require("http");
const fs = require("fs");

function getIndexContents() {
   try {
      return fs.readFileSync("index.html");
   } catch (error) {
      const consoleRed = "\x1b[31m";
      console.log(
         consoleRed,
         "!! Error loading index.html. Make sure it is in the same directory as server.js."
      );
      return "index.html not available.";
   }
}

const server = http.createServer((request, response) => {
   const indexHtml = getIndexContents();
   response.writeHead(200, { "Content-Type": "text/html" });
   response.write(indexHtml);
   response.end();
});

server.listen(3000);

const consoleGreen = "\x1b[32m";
console.log(consoleGreen, "Serving index.html to localhost:3000...");
