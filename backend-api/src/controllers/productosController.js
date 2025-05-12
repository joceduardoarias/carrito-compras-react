import ProductoService from "../service/productoService.js";

class productosController {
    constructor() {}

    async create(req, res) {
        try {
            await ProductoService.createProduct(req.body);
            res.json({ message: 'Producto creado exitosamente.' });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    async getAll(req, res) {
        try {
            const productos = await ProductoService.getAllProducts();
            res.json(productos);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    async getById(req, res) {
        try {
            const producto = await ProductoService.getProductById(req.params.id);
            res.json(producto);
        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    }

    async update(req, res) {
        try {
            const productoActualizado = await ProductoService.updateProduct(req.params.id, req.body);
            res.json({ message: 'Producto actualizado exitosamente.', producto: productoActualizado });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }

    async delete(req, res) {
        try {
            const productoEliminado = await ProductoService.deleteProduct(req.params.id);
            res.json({ message: 'Producto eliminado exitosamente.', producto: productoEliminado });
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
}

export default new productosController();