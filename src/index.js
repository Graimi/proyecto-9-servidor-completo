const express = require('express');
require('./config/db');
// Creamos el soporte para peticiones
const mainRouter = require('./routes/index');

const app = express();
app.use(express.json());

// Creamos el middleware de las rutas en /api
app.use('/api', mainRouter);

// Controlador de rutas no encontradas
app.use('*', (req, res, next) => {
  res.status(404).json({ data: 'Not found' });
});

// Controlador de errores generales del servidor
app.use((error, req, res, next) => {
  res.status(500).json({ data: 'Internal Server Error' });
});


// Establecemos el puerto
const PORT = 4001;
app.listen(PORT, () => {
  console.log(`>> Aplicación corriendo en el puerto http://localhost:${PORT}`);
});