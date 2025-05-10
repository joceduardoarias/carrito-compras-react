import mongoose from "mongoose";
import 'dotenv/config';

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI)
  .then(() => console.log('Conexión exitosa a la base de datos MongoDB.'))
  .catch(err => console.error('Error conectando a la base de datos:', err));

  export default mongoose;

  