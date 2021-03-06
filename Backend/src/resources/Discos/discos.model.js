const mongoose = require("mongoose");

const discoModelSchema = mongoose.Schema({
  name: mongoose.Schema.Types.String,
  location: mongoose.Schema.Types.String,
  tickets: {
    type: mongoose.Schema.Types.ObjectId && Array,
    ref: 'TicketsModel'
  }
});




const Disco = mongoose.model("DiscoModel", discoModelSchema);

const create = (disco) => {
  const newDisco = new Disco(disco);
  newDisco.save(disco, function (err, docs) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Created Docs : ", docs);
    }
  });
  return newDisco;
};

const get = async (id) => {
  let query = { _id: id };
  return await Disco.findOne(query);
};

const remove = (id) => {
  let query = { _id: id };
  Disco.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(`error al realizar la petición ${err}`);
    } else {
      console.log("Deleted Doc : ", docs);
    }
  });
};


const getAll = async () => {
  return await Disco.find();
};

const update = (id, updateDisco) => {
  let query = { _id: id };
  Disco.updateOne(query, updateDisco, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log('Updated Docs : ', docs);
    }
  });
};

module.exports = {
  create,
  remove,
  get,
  getAll,
  update
};
