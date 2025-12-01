const db = require('../config/db');

const authen = async (req, res, next) => {
  try {
    db.query(
      `SELECT * FROM users WHERE name = '${req.body.username}' and password = '${req.body.password}'`,
      function (err, results, fields) {
        console.log('Authentication query results:', results);
        if (err) {
          console.error('Error during authentication query:', err);
          throw err;
        }
        if (results.length === 0) {
          res.status(401).json({
            success: false,
            message: 'Authentication failed: User not found',
          });
          next('User not found');
          return;
        }
        res.status(200).json({
          success: true,
          data: results,
          message: 'Authentication successful',
        });
      }
    );
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
    next(error);
  }
};

const register = (req, res) => {
  const { username, password, role, email, age } = req.body;
  db.execute(
    `INSERT INTO users (name, password, role, email, age) VALUES (?, ?, ?, ?, ?)`,
    [username, password, role, email, age],
    function (err, results, fields) {
      if (err) {
        console.error('Error during user creation query:', err);
        throw err;
      }
      return results.affectedRows === 1
        ? res
            .status(201)
            .json({ success: true, message: 'User created successfully' })
        : res.status(500).json({ success: true, message: 'Failed to create' });
    }
  );
};

module.exports = { authen, register };
