const transactionsModel = require("./transactions.model");
const userModel = require("../Users/users.model")

const getAll = async (req, res) => {
  const transactions = await transactionsModel.getAll();
  return res.status(200).json(transactions);
};

const get = async (req, res) => {
  const transactions = await transactionsModel.get(req.params.id);
  return res.status(200).json(transactions);
};

const create = async (req, res) => {
  const newTransactions = {};
  newTransactions.ticket = req.params.ticketId;
  newTransactions.buyer = req.params.buyerId;
  newTransactions.seller = userModel.getUserByTicket(req.params.buyerId);
  const transactionsCreated = await transactionsModel.create(newTransactions);
  return await res.status(201).json(transactionsCreated);
};


const remove = (req, res) => {
  const transactionsDeleted = transactionsModel.remove(req.params.id);
  return res.status(200).json(transactionsDeleted);
};

module.exports = {
  create,
  get,
  remove,
  getAll,
};
