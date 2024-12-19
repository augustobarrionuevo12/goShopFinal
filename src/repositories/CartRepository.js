const CartDAO = require('../daos/CartDAO');

class CartRepository {
  async getCartById(cartId) {
    return await CartDAO.getById(cartId);
  }

  async createCart(cartData) {
    return await CartDAO.create(cartData);
  }

  async updateCart(cartId, updateData) {
    return await CartDAO.updateById(cartId, updateData);
  }

  async deleteCart(cartId) {
    return await CartDAO.deleteById(cartId);
  }
}

module.exports = new CartRepository();
