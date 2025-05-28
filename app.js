const helmet = require('helmet');
const { JWT_SECRET } = require('./helpers/jwt');

// Agrega al inicio de tu app
app.use(helmet());
app.use(express.json({ limit: '10kb' })); // Limita tamaño del payload

// Configura JWT_SECRET si no existe
if (!process.env.JWT_SECRET) {
  console.warn('JWT_SECRET no definido, usando clave temporal');
  process.env.JWT_SECRET = JWT_SECRET;
}
