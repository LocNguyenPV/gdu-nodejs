const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10);
    //   const peper = process.env.PEPPER || 'default_pepper';
    //   const pwdWithPeper = this.password + peper;
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

async function comparePassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

module.exports = {hashPassword, comparePassword};