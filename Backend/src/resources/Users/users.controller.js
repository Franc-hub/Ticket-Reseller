const userModel = require("./users.model");
const { validationResult } = require('express-validator');


const getAll = async (req, res) => {
  const users = await userModel.getAll();
  return res.status(200).json(users);
};

const get = async (req, res) => {
  const user = await userModel.get(req.params.id);
  return res.status(200).json(user);
};

const update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const updatedUser = req.body;
  const userUpdated = await userModel.update(req.params.id, updatedUser);
  return await res.status(200).json(userUpdated);
};

const remove = (req, res) => {
  const userDeleted = userModel.remove(req.params.id);
  return res.status(200).json(userDeleted);
};

const getUserByTicket = (req, res) => {
  const ticketOfuser = userModel.getUserByTicket(req.params.id)
  if (!ticketOfuser) {
    return res.status(400).json("This user doesn't have this ticket")
  }
  return res.status(200).json(ticketOfuser)
}

module.exports = {
  update,
  get,
  remove,
  getAll,
  getUserByTicket
};
