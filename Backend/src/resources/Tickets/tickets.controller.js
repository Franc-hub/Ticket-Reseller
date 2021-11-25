const ticketsModel = require('./tickets.model')
const DateTime = require('../../../aux/Datetime')
const usersModel = require("../Users/users.model")


const create = async (req, res) => {

    const validTime = DateTime.CheckDatetime(req.body.date)
    if (!validTime) {
        return res.status(400).json("This event has already started")
    }
    const ticket = req.body;
    const newTicket = await ticketsModel.create(ticket)
    usersModel.update(req.params.id,{$push:{tickets: newTicket._id}})
    return await res.status(201).json(newTicket)


}

const getAll = async (req, res) => {
    const tickets = await ticketsModel.all();
    return res.status(200).json(tickets);
};

const getOne = async (req, res) => {
    const ticket = await ticketsModel.get(req.params.id);
    if (ticket) {
        return res.status(200).json(ticket);
    }
    return res.status(404).end();
};


const deleteOne = async (req, res) => {
    const deleteTicket = await ticketsModel.remove(req.params.id);
    if (deleteTicket) {
        return res.status(200).json(user);
    }
    return res.status(404).end
}

module.exports = {
    create,
    getAll,
    getOne,
    deleteOne
}