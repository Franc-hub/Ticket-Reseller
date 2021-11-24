const TicketsModel = require('./tickets.model')
const DateTime = require ('../../../aux/Datetime')


const create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const ticket = req.body;
    const newTicket = TicketsModel.create(ticket)
    return res.status(201).json(newTicket)

}

const getAll = async (req, res) => {
    const tickets = await messageModel.all();
    return res.status(200).json(tickets);
  };

const getOne = async (req, res) => {
    const ticket = await messageModel.get(req.params.id);
    if (ticket) {
      return res.status(200).json(message);
    }
    return res.status(404).end();
  };