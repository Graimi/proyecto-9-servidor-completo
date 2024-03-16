require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require("cors");
const cloudinary = require('cloudinary').v2;
const { default: rateLimit } = require('express-rate-limit');
const mainRouter = require('./api/routes/indexRouter');
const { setError } = require('./config/error');

const app = express();

connectDB();

app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());

// Aplicamos el código para el límite de solicitudes al servidor
const limiter = rateLimit({
  windowMs: 3 * 60 * 1000, // 3 minutos
  limit: 50, // limite de 50 peticiones
  standardHeaders: false,
  legacyHeaders: false,
});
app.use(limiter);

// Establecemos un límite para no saturar el servidor
app.use(express.json({ limit: '1mb' }));

// Formateamos correctamente la información que nos llega
app.use(express.urlencoded({ limit: '1mb', extended: true }));

// Especificamos que headers se pueden usar y que tipo de respuesta se puede poner
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Methods', 'Content-Type');
  next();
});

// Configuramos para que no se vea el siguiente header específico y así evitar la visualización de información sensible
app.disable('x-powered-by')

// Creamos el middleware de las rutas en /api
app.use('/api', mainRouter);

// Controlador de rutas no encontradas
app.use('*', (req, res, next) => {
  return next(setError(404, 'Not Found'));
});

// Controlador de errores generales del servidor
app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Internal Server Error');
});

// Establecemos el puerto
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`>> Aplicación corriendo en el puerto http://localhost:${PORT}`);
});
