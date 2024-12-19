import ProductModel from '../models/Product.js';

class ProductDAO {
  async getAllProducts() {
    return await ProductModel.find();
  }

  async getProductById(id) {
    return await ProductModel.findById(id);
  }

  async createProduct(productData) {
    return await ProductModel.create(productData);
  }

  async updateProduct(id, productData) {
    return await ProductModel.findByIdAndUpdate(id, productData, { new: true });
  }

  async deleteProduct(id) {
    return await ProductModel.findByIdAndDelete(id);
  }
}

export default new ProductDAO();
