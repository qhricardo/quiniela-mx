const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Genera una clave secreta fuerte si no existe
const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(32).toString('hex');

const signToken = (payload, expiresIn = '15m') => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn,
    algorithm: 'HS256',
    issuer: 'quiniela-mx-api'
  });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256'],
      issuer: 'quiniela-mx-api'
    });
  } catch (err) {
    throw new Error('Token inválido o expirado');
  }
};

module.exports = {
  signToken,
  verifyToken,
  JWT_SECRET // Exportar para tests
};
