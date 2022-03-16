import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });
import http from 'http';
import Bbb from './aaa/bbb';

const server = http.createServer(function (req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, World!`);
    const ddd = new Bbb();
    ddd.ccc();
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed\n');
  }
});
server.listen(process.env.APP_PORT);

console.log('bbbbb');
