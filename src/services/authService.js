const UserRepository = require('../repositories/UserRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { generateToken } = require('../utils/tokenUtils');

class AuthService {
  async registerUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    return await UserRepository.createUser(userData);
  }

  async loginUser(email, password) {
    const user = await UserRepository.getUserByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid credentials');
    }
    const token = generateToken(user);
    return { user, token };
  }
}

module.exports = new AuthService();
