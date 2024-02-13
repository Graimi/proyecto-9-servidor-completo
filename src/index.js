const express = require('express');
require('dotenv').config();
const mainRouter = require('./api/routes/indexRouter');
const connectDB = require('./config/db');
const { setError } = require('./config/error');
const cloudinary = require('cloudinary').v2;

const app = express();

connectDB();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use(express.json());

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
