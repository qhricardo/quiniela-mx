// En middlewares/auth.js
const { verifyToken } = require('../helpers/jwt');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies?.jwt || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ 
        error: 'Acceso no autorizado',
        action: 'redirect',
        target: '/login'
      });
    }

    const decoded = verifyToken(token);
    req.user = await User.findById(decoded.userId);
    next();
  } catch (error) {
    console.error('Auth error:', error);
    res.status(401).clearCookie('jwt').json({ 
      error: 'Sesión inválida',
      action: 'redirect',
      target: '/login'
    });
  }
};
