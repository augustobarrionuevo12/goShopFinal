const ProductDAO = require('../daos/ProductDAO');

class ProductRepository {
  async getAllProducts() {
    return await ProductDAO.getAll();
  }

  async getProductById(productId) {
    return await ProductDAO.getById(productId);
  }

  async createProduct(productData) {
    return await ProductDAO.create(productData);
  }

  async updateProduct(productId, updateData) {
    return await ProductDAO.updateById(productId, updateData);
  }

  async deleteProduct(productId) {
    return await ProductDAO.deleteById(productId);
  }
}

module.exports = new ProductRepository();
