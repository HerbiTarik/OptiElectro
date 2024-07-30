const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/user', userController.createUser);

module.exports = router;
