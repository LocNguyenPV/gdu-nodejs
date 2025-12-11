const prisma = require('../config/prismaClient');

const User = {
  create: async (userData) => {
    const { username, password, role, email, age } = userData

    const user = await prisma.users.create({
      data: {
        name: username,
        password,
        role,
        email,
        age,
      },
    })

    return user ? 'User created successfully' : 'User creation failed'
  },

  authen: async (username, password) => {
    const users = await prisma.users.findMany({
      where: {
        name: username,
        password: password,
      },
    })
    return users
  },
}

module.exports = User