const db = require('../config/db');

const User = {
  create: async (userData) => {
    const { username, password, role, email, age } = userData;
    const [result] = await db.execute(
      `INSERT INTO users (name, password, role, email, age) VALUES (?, ?, ?, ?, ?)`,
      [username, password, role, email, age]
    );
    return result.affectedRows === 1
      ? 'User created successfully'
      : 'User creation failed';
  },
  authen: async (username, password) => {
    const [results, fields] = await db.execute(
      `SELECT * FROM users WHERE name = ? and password = ?`,
      [username, password]
    );
    return results;
  },
};

module.exports = User;
