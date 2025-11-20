const express = require("express");
const authRouter = express.Router();
const user = require("../controllers/user");

authRouter.post('/login', user.authenUser);


module.exports = authRouter;