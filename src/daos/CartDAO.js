import CartModel from '../models/Cart.js';

class CartDAO {
  async getCartById(id) {
    return await CartModel.findById(id).populate('products.product');
  }

  async updateCart(id, cartData) {
    return await CartModel.findByIdAndUpdate(id, cartData, { new: true });
  }
}

export default new CartDAO();
