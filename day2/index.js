const express = require('express');
const app = express();
const registerRouter = require('./routers/register');
app.use(express.static('public'));

app.use('/register', registerRouter);

app.get('/info', function (req, res) {
  res.send(JSON.stringify({ name: 'GDU', addr: 'Quang Trung, Gò Vấp' }));
});

app.get('/', function (req, res) {
  res.send('Hello from ExpressJS');
});

module.exports = app;
