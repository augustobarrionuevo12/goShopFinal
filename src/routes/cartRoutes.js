import express from 'express';
import { addToCart, getCartById, purchaseCart } from '../controllers/cartController.js';
import { userMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Obtener carrito por ID
router.get('/:cid', getCartById);

// Agregar producto al carrito (Solo usuarios)
router.post('/:cid/products', userMiddleware, addToCart);

// Finalizar compra
router.post('/:cid/purchase', userMiddleware, purchaseCart);

export default router;
