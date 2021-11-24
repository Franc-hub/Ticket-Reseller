const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userModelSchema = mongoose.Schema({
  FullName: String,
  email: String,
  password: String,
  Phone: String,
});

userModelSchema.pre("save", async function (next) {
  //antes de cada save, se ejecuta esto, ,por esto el pre.
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compile model from schema
const User = mongoose.model("UserModel", userModelSchema);

const create = (user) => {
  const newUser = new User(user);
  newUser.save(user, function (err, docs) {
    if (err) {
      return console.log(err);
    } else {
      console.log("Created Docs : ", docs);
    }
  });
};

const get = async (id) => {
  let query = { _id: id };
  return await User.findOne(query);
};

const remove = (id) => {
  let query = { _id: id };
  User.deleteOne(query, function (err, docs) {
    if (err) {
      console.log(`error al realizar la petición ${err}`);
    } else {
      console.log("Deleted Doc : ", docs);
    }
  });
};


const update = async (id, updatedUser) => {
  let query = { _id: id };
  const salt = await bcrypt.genSalt();
  updatedUser.password = await bcrypt.hash(updatedUser.password, salt);
  User.updateOne(query, updatedUser, function (err, docs) {
    if (err) {
      console.log(`error al realizar la petición ${err}`);
    } else {
      console.log("Updated Docs : ", docs);
    }
  });
};


module.exports = {
  create,
  remove,
  get,
  update,
};
