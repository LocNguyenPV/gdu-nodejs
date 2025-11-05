let http = require('http');
const toUpper = require('upper-case');

const server = http.createServer(function (req, res) {
  const url = req.params.language;

  res.writeHead(200, { 'Content-Type': 'text/html' });
  return res.end('Hello ' + url);
  // if (url === '/javascript') {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   return res.end('Hello JavaScript');
  // }else if (url === '/python') {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   return res.end('Hello Python');
  // }else if (url === '/java') {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   return res.end('Hello Java');
  // }
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.end(toUpper.upperCase('Hello Nodejs'));
});

server.listen(8080, () => {
  console.log('Access from port 8080');
});
