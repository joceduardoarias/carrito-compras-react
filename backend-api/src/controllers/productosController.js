import ProductoService from "../service/productoService.js";

class productosController {
    constructor(){

    }

    async create (req, res) {
        try {
            await ProductoService.createProduct(req.body);
            res.json({ message: 'Producto creado exitosamente.' });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    async getAll (req, res) {
        try {
            const productos = await ProductoService.getAllProducts();
            res.json(productos);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    async getById (req, res) {
        try {
            
        } catch (e) {
            
        }
    }
    async update (req, res) {
        try {
            
        } catch (e) {
            
        }
    }
    async delete (req, res) {
        try {
            
        } catch (e) {
            
        }
    }
}

export default new productosController();