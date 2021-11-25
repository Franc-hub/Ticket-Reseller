const mongoose = require("mongoose"); 
const jwt = require('jsonwebtoken');
const usersModel = require('../Users/users.model')


const login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await usersModel.login(email, password);
      if (user) {
        const token = jwt.sign(
          { _id: user._id},
          process.env.TOKEN_SECRET
        );
        res.json({ token: token, user: user });
      }
    } catch (err) {
      res.status(400).json();
      console.log(err);
    }
  };
  
  const signUp = async (req, res) => {
    // const errors = validationResult(req);
    //   if (!errors.isEmpty()) {
    //    return res.status(400).json({ errors: errors.array() });
    //   }
    const newUser = req.body;
    const userCreated = await userModel.create(newUser);
    return await res.status(201).json(userCreated);
  };
  module.exports = {
    login,
    signUp
  };