const ProductRepository = require('../repositories/ProductRepository');

class ProductService {
  async getAllProducts() {
    return await ProductRepository.getAllProducts();
  }

  async getProductById(productId) {
    return await ProductRepository.getProductById(productId);
  }
}

module.exports = new ProductService();
