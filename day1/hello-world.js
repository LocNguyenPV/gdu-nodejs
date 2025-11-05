let http = require('http');
const toUpper = require('upper-case');

const server = http.createServer(function (req, res) {
  const path = req.url;
  if (path === '/javascript') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end('Hello JavaScript');
  } else if (path === '/python') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end('Hello Python');
  }
});

server.listen(8080, () => {
  console.log('Access from port 8080');
});
