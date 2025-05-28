const { check } = require('express-validator');

exports.loginValidator = [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty()
];

exports.registerValidator = [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email no es válido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({ min: 6 })
];