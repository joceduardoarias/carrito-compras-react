import mongoose from '../config/dbClient.js';

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'comun'], 
        default: 'comun', 
    },
}, {
    timestamps: true,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;