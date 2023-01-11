const router = require('express').Router();

const authController = require('../controllers/authController');

router.put('/signup', authController.signup);

router.post('/login', authController.login);

module.exports = router;