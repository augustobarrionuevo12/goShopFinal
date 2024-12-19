const CartRepository = require('../repositories/CartRepository');

class CartService {
  async getCartById(cartId) {
    return await CartRepository.getCartById(cartId);
  }

  async addItemToCart(cartId, item) {
    const cart = await CartRepository.getCartById(cartId);
    cart.items.push(item);
    return await CartRepository.updateCart(cartId, cart);
  }
}

module.exports = new CartService();
