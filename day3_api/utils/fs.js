const fs = require('fs'); // Use the promise-based version of fs

const writeData = (path, data) => {
  try {
    fs.writeFile(path, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing file:', error);
  }
};

module.exports = { writeData };
