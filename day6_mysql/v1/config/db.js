// src/config/db.js
const mysql = require('mysql2');
const config = require('../../utils/config');
const { host, user, password, database } = config.mysql;

const db = mysql.createConnection({
  host: host,
  user: user,
  password: password,
  database: database,
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL!');
});

module.exports = db;
