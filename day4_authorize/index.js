const express = require('express');
const app = express();
const userRouter = require('./routers/users');
const authRouter = require('./routers/auth');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRouter);
app.use('/auth', authRouter);

module.exports = app;