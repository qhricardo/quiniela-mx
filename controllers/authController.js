const User = require('../models/User');
const { signToken } = require('../helpers/jwt');
const RateLimit = require('express-rate-limit');

// Configura rate-limiting
const authLimiter = new RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // Máximo 10 intentos por IP
  message: 'Demasiados intentos, por favor intente más tarde'
});

const authController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      
      // Busca usuario sin el password por defecto
      const user = await User.findOne({ email }).select('+password');
      
      if (!user || !(await user.comparePassword(password))) {
        return res.status(401).json({ 
          error: 'Credenciales inválidas'
        });
      }

      // Crea token sin datos sensibles
      const token = signToken({ 
        userId: user._id,
        role: user.role 
      });

      // Configura cookie segura
      res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 900000 // 15 minutos
      });

      return res.json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });

    } catch (error) {
      console.error('Login error:', error);
      return res.status(500).json({ error: 'Error en el servidor' });
    }
  },

  // Aplicar rate-limiting a las rutas
  middleware: {
    authLimiter
  }
};

module.exports = authController;
