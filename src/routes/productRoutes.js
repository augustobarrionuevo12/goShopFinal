import express from 'express';
import { createProduct, updateProduct, deleteProduct, getAllProducts, getProductById } from '../controllers/productController.js';
import { adminMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Obtener todos los productos
router.get('/', getAllProducts);

// Obtener producto por ID
router.get('/:id', getProductById);

// Crear producto (Solo administrador)
router.post('/', adminMiddleware, createProduct);

// Actualizar producto (Solo administrador)
router.put('/:id', adminMiddleware, updateProduct);

// Eliminar producto (Solo administrador)
router.delete('/:id', adminMiddleware, deleteProduct);

export default router;
