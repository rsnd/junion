const express = require('express');
const router = express.Router();

// Controllers - route handlers
const homeController = require('../controllers/home');
const userController = require('../controllers/user');
const passwordController = require('../controllers/password');
const eventController = require('../controllers/event');
const commentController = require('../controllers/comment');
const pollController = require('../controllers/poll');

// Home route
router.get('/', homeController.home);
router.get('/d469f83ab1c9', homeController.admin);

// User routes
router.get('/users', userController.getAll);
router.post('/users', userController.create);
router.put('/users', userController.update);
router.delete('/users', userController.remove);
router.get('/users/:id', userController.getOne);

// Password forgot and reset
router.post('/password/forgot', passwordController.forgot);
router.get('/password/reset/:token', passwordController.validate);
router.post('/password/reset/:token', passwordController.reset);

// Event routes
router.get('/events', eventController.getAll);
router.post('/events', eventController.create);
router.put('/events', eventController.update);
router.delete('/events', eventController.remove);
router.get('/event/:id', eventController.getOne);

// Comment routes
router.get('/event/:eventId/comments', commentController.getAll);
router.post('/event/:eventId/comments', commentController.create);
router.put('/event/:eventId/comments', commentController.update);
router.delete('/event/:eventId/comments', commentController.remove);
router.get('/event/:eventId/comments/:id', commentController.getOne);

// Poll routes
// No PUT method as polls shouldn't be edited after being published.
router.get('/event/:eventId/polls', pollController.getAll);
router.post('/event/:eventId/polls', pollController.create);
router.delete('/event/:eventId/polls', pollController.remove);

module.exports = router;
