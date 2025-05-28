// En middlewares/validators.js
const { check } = require('express-validator');

exports.loginValidator = [
  check('email').isEmail().withMessage('Email inválido'),
  check('password').isLength({ min: 6 }).withMessage('Mínimo 6 caracteres')
];

// En routes/auth.js
router.post('/login', loginValidator, authController.login);
