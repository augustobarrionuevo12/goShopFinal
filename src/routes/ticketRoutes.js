import express from 'express';
import { createTicket, getTicketById } from '../controllers/ticketController.js';

const router = express.Router();

// Obtener ticket por ID
router.get('/:id', getTicketById);

// Crear ticket
router.post('/', createTicket);

export default router;
