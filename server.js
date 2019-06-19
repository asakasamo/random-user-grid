/**
 * A simple Node web server that serves index.html to localhost.
 */

const http = require("http");
const fs = require("fs");

/**
 * Synchronously retrieves and returns the contents of index.html, or an error string if unavailable.
 * @returns {object} the contents of index.html
 */
function getIndexContents() {
   try {
      return fs.readFileSync("index.html");
   } catch (error) {
      const consoleRed = "\x1b[31m";
      const errorMessage =
         "!! Error loading index.html. Make sure it is in the same directory as server.js.";

      console.log(consoleRed, errorMessage);

      return "index.html not available.";
   }
}

/**
 * Prints the starting message for the server to the console.
 */
function printStartMessage() {
   const port = server.address().port;
   const consoleGreen = "\x1b[32m";
   const consoleYellow = "\x1b[33m";
   const startMessage = `Serving index.html to: ${consoleYellow}localhost:${port}`;

   console.log(consoleGreen, startMessage);
}

// configure the server to respond to all requests with index.html
const server = http.createServer((request, response) => {
   const indexHtml = getIndexContents();
   response.writeHead(200, { "Content-Type": "text/html" });
   response.write(indexHtml);
   response.end();
});

//start the server
server.listen(0);
printStartMessage();
