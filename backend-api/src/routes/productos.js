import express from "express";
import productosController from '../controllers/productos'

const route = express.Router();


route.get('/', productosController.getAll);
route.get('/:id', productosController.getById);
route.post('/', productosController.create);
route.put('/:id', productosController.update);
route.delete('/:id', productosController.delete);