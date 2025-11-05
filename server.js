const express = require('express');
const app = express();
const registerRouter = require('./day3_api/routers/register');
const userRouter = require('./day4_authorize/routers/users');
const authRouter = require('./day4_authorize/routers/auth');
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log('Ready to connect on port 3000');
});

app.use('/register', registerRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.get('/info', function (req, res) {
  res.send(JSON.stringify({ name: 'GDU', addr: 'Quang Trung, Gò Vấp' }));
});

app.get('/', function (req, res) {
  res.send('Hello from ExpressJS');
});

// app.all('/test', function(req, res) {
//   res.send('HTTP method doesn\'t matter');
// });
