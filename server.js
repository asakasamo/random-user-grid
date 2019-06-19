/**
 * A simple Node web server that serves files to localhost.
 */

const http = require("http");
const fs = require("fs");
const url = require("url");

/**
 * Synchronously retrieves and returns the contents of a file, or an error string if unavailable.
 * An empty request path will return the contents of index.html.
 *
 * @param {string} requestPath the requested path
 * @returns {object} the contents of the file
 */
function getFileContents(requestPath = "") {
   requestPath = requestPath.slice(1);
   if (!requestPath) requestPath = "index.html";

   try {
      return fs.readFileSync(requestPath);
   } catch (error) {
      const consoleRed = "\x1b[31m";
      const errorMessage = `Invalid file path: ${requestPath}`;
      console.log(consoleRed, errorMessage);

      return "File not found";
   }
}

/**
 * Prints the starting message for the server to the console, including what port it's on.
 */
function printStartMessage() {
   const port = server.address().port;
   const consoleGreen = "\x1b[32m";
   const consoleYellow = "\x1b[33m";
   const startMessage = `Serving index.html to: ${consoleYellow}localhost:${port}`;

   console.log(consoleGreen, startMessage);
}

// configure the server to respond with whatever's requested
const server = http.createServer((request, response) => {
   const requestPath = url.parse(request.url).pathname;
   const fileContents = getFileContents(requestPath);

   response.writeHead(200);
   response.write(fileContents);
   response.end();
});

//start the server on a random port
server.listen(0);
printStartMessage();
