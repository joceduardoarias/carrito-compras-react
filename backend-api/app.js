import express from "express";
import 'dotenv/config';
import productosRoutes from './src/routes/productosRoutes.js';
import  mongoose  from './src/config/dbClient.js';

const app = express();

// Definir rutas
app.use('/', productosRoutes);

try {
    const PORT = process.env.PORT || 3000;
            
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
} catch (e) {
    console.log(e);
}