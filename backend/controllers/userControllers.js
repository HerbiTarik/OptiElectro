const User = require('../models/userModel');
const bcrypt = require('bcrypt');

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
      const user = await User.findById(req.params.id); //req.params.id ---> utilisé pour accéder aux paramètres de la route définis dans l'URL de la requête.
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
      const {firstName, lastName, email, password} = req.body; // req.body --> Utilisé pour accéder aux données envoyées dans le corps de la requête, généralement pour les requêtes POST ou PUT où des données sont envoyées pour être traitées par le serveur.

      const hashedPassword = await bcrypt.hash(password, 10); //10 -> "salt rounds" : nombre de tours d'algorithme de hachage (Plus le nombre de tours est élevé, plus le processus de hachage sera lent et sécurisé.)

      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      res.status(201).json(newUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({error: err.message});
    }
  },
};

module.exports = userController;
