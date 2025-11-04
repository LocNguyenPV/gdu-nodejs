require('dotenv').config();

const express = require("express");
const authRouter = express.Router();
const VALID_API_KEY = "12345";  // Replace to your api key
 
authRouter.post("/login", function (req, res) {
    const { username, password } = req.body;
    if (username === "admin" && password === "password") {
        return res.status(200).json({ success: true, message: "Login successful", apiKey: process.env.API_TOKEN});
    } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

module.exports = authRouter;