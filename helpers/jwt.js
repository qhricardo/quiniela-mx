// En helpers/jwt.js
const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET,
    { 
      expiresIn: '1h',
      issuer: 'quiniela-mx-api',
      audience: 'quiniela-mx-web'
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, {
    issuer: 'quiniela-mx-api',
    audience: 'quiniela-mx-web'
  });
};

module.exports = { generateToken, verifyToken };
