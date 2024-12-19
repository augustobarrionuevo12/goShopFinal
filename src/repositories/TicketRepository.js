const TicketDAO = require('../daos/TicketDAO');

class TicketRepository {
  async createTicket(ticketData) {
    return await TicketDAO.create(ticketData);
  }

  async getTicketById(ticketId) {
    return await TicketDAO.getById(ticketId);
  }

  async getAllTickets() {
    return await TicketDAO.getAll();
  }
}

module.exports = new TicketRepository();
