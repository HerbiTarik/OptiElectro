const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users/registration', userController.registration);
router.post('/users/login', userController.login);
router.put('/users/image', userController.AddImage);

module.exports = router;
