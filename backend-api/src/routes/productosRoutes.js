import express from "express";
import productosController from '../controllers/productosController.js'

const route = express.Router();


route.get('/api/productos', productosController.getAll);
route.get('/:id', productosController.getById);
route.post('/', productosController.create);
route.put('/:id', productosController.update);
route.delete('/:id', productosController.delete);

export default route;