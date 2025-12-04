
const config = require('../../utils/config');
const mysql = require('mysql2/promise');
const { host, user, password, database } = config.mysql;
const db = mysql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
});

module.exports = db;
