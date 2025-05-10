import Producto from "../models/producto.js";

class ProductoService {
    constructor() {
        
    }

    async  createProduct (data) {
        if (!data.title || !data.description || !data.price || !data.image){
            throw new Error('Todos los campos son requeridos');
        }
        try {
            const producto = await Producto.create(data);
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async getAllProducts () {
        try {
            const productos = await Producto.find();
            return productos;
        } catch (error) {
            throw error;
        }
    }

    async getProductById (id){
        try {
            const producto = Producto.getById(id);
            return producto;
        } catch (error) {
            throw error
        }
    }

    async updateProduct (data){
        if (!data.title || !data.description || !data.price || !data.image){
            throw new Error('Todos los campos son requeridos');
        }
        try {
            const producto = await Producto.update(data);
            return producto;
        } catch (error) {
            throw error;
        }
    }

    async deleteProduct (id){
        try {
            const deleted = await Producto.remove(id);
            return deleted;
        } catch (error) {
            throw error;
        }
    }
}

export default new ProductoService();