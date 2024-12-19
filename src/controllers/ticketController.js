import Ticket from '../models/Ticket.js';
import { v4 as uuidv4 } from 'uuid';

export const createTicket = async (req, res) => {
    try {
        const { amount, purchaser } = req.body;
        const ticket = await Ticket.create({ code: uuidv4(), amount, purchaser });
        res.status(201).json(ticket);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.status(200).json(tickets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
