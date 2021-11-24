const discoModel = require("./discos.model");

const getAll = async (req, res) => {
  const discos = await discoModel.getAll();
  return res.status(200).json(discos);
};

const get = async (req, res) => {
  const disco = await discoModel.get(req.params.id);
  return res.status(200).json(disco);
};

const create = (req, res) => {
  const newDisco = req.body;
  const discoCreated = discoModel.create(newDisco);
  return res.status(201).json(discoCreated);
};


const remove = (req, res) => {
  const discoDeleted = discoModel.remove(req.params.id);
  return res.status(200).json(discoDeleted);
};

module.exports = {
  create,
  get,
  remove,
  getAll,
};
