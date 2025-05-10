import mongoose from '../config/dbClient.js';

const productoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {    
    timestamps: false
});

const Producto = mongoose.model('Producto', productoSchema);

const create = async (data) => {
    try {
        const producto = new Productos(data);
        await producto.save();
        return producto;
    } catch (err) {        
        throw err
    }
}

const find = async () => {
    try {
        const producto = await Productos.find();
        return producto;
    } catch (err) {
        throw err;
    }
};

const findById = async (id) => {
    try {
        const producto = await Productos.findById(id);
        return producto;
    } catch (err) {
        throw err;
    }
};

const findByIdAndUpdate = async (id, data) => {
    try {
        const producto = await Productos.findByIdAndUpdate(id, data, { new: true });
        return producto;
    } catch (err) {
        throw err;
    }
};

const findByIdAndDelete = async (id) => {
    try {
        const producto = await Productos.findByIdAndDelete(id);
        return producto;
    } catch (err) {
        throw err;
    }
};

export default Producto;