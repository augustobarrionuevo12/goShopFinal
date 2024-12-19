import express from 'express';
import passport from 'passport';
import { registerUser, loginUser, currentUser, logoutUser } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();

// Registro de usuario
router.post('/register', registerUser);

// Login de usuario
router.post('/login', loginUser);

// Obtener usuario actual
router.get('/current', passport.authenticate('jwt', { session: false }), authMiddleware, currentUser);

// Logout
router.post('/logout', logoutUser);

export default router;
