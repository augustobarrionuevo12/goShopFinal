import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
    try {
        const cart = await Cart.findById(req.params.id).populate('products.product');
        if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addToCart = async (req, res) => {
    try {
        const { id } = req.params;
        const { productId, quantity } = req.body;

        const cart = await Cart.findById(id);
        if (!cart) return res.status(404).json({ message: 'Carrito no encontrado' });

        const existingProduct = cart.products.find((p) => p.product.toString() === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
