import express from "express";
import productosController from '../controllers/productosController.js'

const route = express.Router();


route.get('/api/productos', productosController.getAll);
route.get('/api/producto/:id', productosController.getById);
route.post('/api/producto', productosController.create);
route.put('/api/producto/:id', productosController.update);
route.delete('/api/producto/:id', productosController.delete);

export default route;