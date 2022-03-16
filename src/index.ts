import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
import http from 'http';
const server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, World! This is ${process.env.POD_IP}`);
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed\n');
  }
});
server.listen(3019);
