const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const ServicesControllers = require('../controllers/servicesControllers');
const CompaniesControllers = require('../controllers/companyController');
const bookingControllers = require('../controllers/bookingController');
const chatControllers = require('../controllers/chatController');

router.get('/users/id/:id', userController.getUserById);
router.get('/users/email/:email', userController.getUserByEmail);
router.put('/users/updateData', userController.UpdateDataProfile);
router.post('/users/registration', userController.registration);
router.post('/users/login', userController.login);
router.put('/users/image', userController.AddImage);
router.get('/services', ServicesControllers.getServicesController);
router.get('/villes', ServicesControllers.getCity);
router.get('/companies', CompaniesControllers.getCompaniesController);
router.post('/booking/activites', bookingControllers.setBookingControllers);
router.post('/chat/sender', chatControllers.setChatController);
router.get('/companyName/:id', chatControllers.getCompanyNameController);
router.delete(
  '/deleteBooking/:id',
  bookingControllers.deleteBookingtempControllers,
);
router.get('/myBookings/:id', bookingControllers.fetchBookingReservation);
router.put(
  '/bookingCompany/:id',
  bookingControllers.addBookingCompanyControllers,
);
router.get('/activites/:id', ServicesControllers.getTypesIntervention);
router.get('/chat/:id1/:id2', chatControllers.getChatController);

router.get('/users', userController.getAllUsers); // il faut mettre le chemin racine en dernier

module.exports = router;
