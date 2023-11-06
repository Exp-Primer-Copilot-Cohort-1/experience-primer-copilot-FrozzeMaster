// Create web server
// 1. Load http module
const http = require('http');
// 2. Create server
const server = http.createServer(function (request, response) {
  // 3. Set the response HTTP header with HTTP status and Content type
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  // 4. Send the response body "Hello World"
  response.end('Hello World\n');
});