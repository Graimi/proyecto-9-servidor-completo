// Configuración de conexión a Mongo DB
const mongoose = require('mongoose');

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

// Función para conectarnos a la base de datos
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('>> Conectado a la BBDD!');
  } catch (error) {
    console.log('>> Error al conectarse a la BBDD', err);
    process.exit(1);
  }
};

module.exports = connectDB;
