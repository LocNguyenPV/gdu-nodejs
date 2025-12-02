const express = require('express');
const userRouter = express.Router();
const user = require('../controllers/user');

userRouter.post('/register', user.register);
userRouter.post('/authen', user.authen);

module.exports = userRouter;
