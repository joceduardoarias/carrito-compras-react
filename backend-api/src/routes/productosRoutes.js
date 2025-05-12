import express from "express";
import productosController from '../controllers/productosController.js';
import UsuariosController from '../controllers/usuariosController.js';

const route = express.Router();


route.get('/api/productos', productosController.getAll);
route.get('/api/producto/:id', productosController.getById);
route.post('/api/producto', productosController.create);
route.put('/api/producto/:id', productosController.update);
route.delete('/api/producto/:id', productosController.delete);

route.post('/api/login', UsuariosController.login);
route.post('/api/register', UsuariosController.register);

export default route;