const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const ServicesControllers = require('../controllers/servicesControllers');
const CompaniesControllers = require('../controllers/companyController');

router.get('/users/id/:id', userController.getUserById);
router.get('/users/email/:email', userController.getUserByEmail);
router.put('/users/updateData', userController.UpdateDataProfile);
router.post('/users/registration', userController.registration);
router.post('/users/login', userController.login);
router.put('/users/image', userController.AddImage);
router.get('/services', ServicesControllers.getServicesController);
router.get('/villes', ServicesControllers.getCity);
router.get('/companies', CompaniesControllers.getCompaniesController);
router.get('/activites/:id', ServicesControllers.getTypesIntervention);

router.get('/users', userController.getAllUsers); // il faut mettre le chemin racine en dernier

module.exports = router;
