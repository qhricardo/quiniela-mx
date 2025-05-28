const jwt = require('jsonwebtoken');

const generateJWT = (userId) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            { uid: userId },
            process.env.JWT_SECRET,
            { expiresIn: '4h' },
            (err, token) => err ? reject(err) : resolve(token)
        );
    });
};

module.exports = { generateJWT };