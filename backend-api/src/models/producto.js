import mongoose from '../config/dbClient';

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
    collation: 'productos',
    timestamps: false
});

const Productos = mongoose.model('Productos', productoSchema);

const create = async (data) => {
    try {
        const producto = new Productos(data);
        await producto.save();
        return producto;
    } catch (err) {
        throw err
    }
}

const getAll = async () => {
    try {
        const producto = await Productos.find();
        return producto;
    } catch (err) {
        throw err;
    }
};

const getById = async (id) => {
    try {
        const producto = await Productos.findById(id);
        return producto;
    } catch (err) {
        throw err;
    }
};

const update = async (id, data) => {
    try {
        const producto = await Productos.findByIdAndUpdate(id, data, { new: true });
        return producto;
    } catch (err) {
        throw err;
    }
};

const remove = async (id) => {
    try {
        const producto = await Productos.findByIdAndDelete(id);
        return producto;
    } catch (err) {
        throw err;
    }
};

export default Product;