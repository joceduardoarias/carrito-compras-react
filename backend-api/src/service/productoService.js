import Producto from "../models/producto.js";

class ProductoService {
    constructor() {}

    async createProduct(data) {
        if (!data.title || !data.description || !data.price || !data.image) {
            throw new Error('Todos los campos son requeridos');
        }
        try {
            const producto = await Producto.create(data);
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async getAllProducts() {
        try {
            const productos = await Producto.find();
            return productos;
        } catch (error) {
            throw error;
        }
    }

    async getProductById(id) {
        try {
            const producto = await Producto.findById(id);
            if (!producto) {
                throw new Error('Producto no encontrado');
            }
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async updateProduct(id, data) {
        if (!data.title || !data.description || !data.price || !data.image) {
            throw new Error('Todos los campos son requeridos');
        }
        try {
            const producto = await Producto.findByIdAndUpdate(id, data, { new: true });
            if (!producto) {
                throw new Error('Producto no encontrado');
            }
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct(id) {
        try {
            const deleted = await Producto.findByIdAndDelete(id);
            if (!deleted) {
                throw new Error('Producto no encontrado');
            }
            return deleted;
        } catch (error) {
            throw error;
        }
    }
}

export default new ProductoService();