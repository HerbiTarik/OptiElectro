const User = require('../models/userModel');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: err.message});
    }
  },
  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({message: 'User not found'});
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({error: err.message});
    }
  },
  createUser: async (req, res) => {
    try {
      const {firstName, lastName, email, password} = req.body;
      const newUser = await User.create({firstName, lastName, email, password});
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: err.message});
    }
  },
};

module.exports = userController;
