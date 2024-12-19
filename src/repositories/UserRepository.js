const UserDAO = require('../daos/UserDAO');

class UserRepository {
  async getUserById(userId) {
    return await UserDAO.getById(userId);
  }

  async getUserByEmail(email) {
    return await UserDAO.getByEmail(email);
  }

  async createUser(userData) {
    return await UserDAO.create(userData);
  }

  async updateUser(userId, updateData) {
    return await UserDAO.updateById(userId, updateData);
  }
}

module.exports = new UserRepository();
