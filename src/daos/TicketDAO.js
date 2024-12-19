import TicketModel from '../models/Ticket.js';

class TicketDAO {
  async createTicket(ticketData) {
    return await TicketModel.create(ticketData);
  }

  async getTicketById(id) {
    return await TicketModel.findById(id);
  }
}

export default new TicketDAO();
