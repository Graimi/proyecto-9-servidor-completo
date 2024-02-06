// Configuración de conexión a Mongo DB
const mongoose = require('mongoose');

const MONGO_PORT = 27017;
const MONGO_DB = 'proyecto-8-modelo-relacional';

mongoose.set('strict', false);
mongoose.set('strictQuery', false);
mongoose.set('strictPopulate', false);

mongoose
  .connect(`mongodb://127.0.0.1:${MONGO_PORT}/${MONGO_DB}`)
  // .connect(`mongodb://localhost:${MONGO_PORT}/${MONGO_DB}`)
  .then(() => {
    console.log('>> Conectado a la BBDD!');
  })
  .catch((err) => {
    console.log('>> Error al conectarse a la BBDD', err);
    process.exit(1);
  });
