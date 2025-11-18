const express = require('express');
const app = express();
const registerRouter = require('./routers/register');
const userRouter = require('./routers/users');
const authRouter = require('./routers/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/register', registerRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

module.exports = app;
