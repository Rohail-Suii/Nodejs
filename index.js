const http = require('http');
const love = require('./feature');
const fs = require('fs');
const path = require('path');
const home = fs.readFileSync('./index.html');
const server = http.createServer((req, res) => {
   if (req.url === '/' && req.method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(home);
   }
}
);
server.listen(3000, () => console.log('Server running on port 3000'));