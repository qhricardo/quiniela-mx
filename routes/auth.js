const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/authController');
const { loginValidator, registerValidator } = require('../middlewares/validators');

router.post('/login', loginValidator, login);
router.post('/register', registerValidator, register);

module.exports = router;