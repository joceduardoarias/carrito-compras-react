import Usuario from '../models/usuario.js';
import bcrypt from 'bcryptjs';

class UsuarioService {
    async login(email, password) {
        try {
            const usuario = await Usuario.findOne({ email });
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }

            const contraseñaValida = await bcrypt.compare(password, usuario.password);
            if (!contraseñaValida) {
                throw new Error('Contraseña incorrecta');
            }

            return usuario;
        } catch (error) {
            throw error;
        }
    }

    async register(data) {
        try {
            const { email, password, role } = data;
            
            const usuarioRegistrado = await Usuario.findOne({ email });
            if (usuarioRegistrado) {
                throw new Error('El usuario ya está registrado');
            }

            
            const hasPassword = await bcrypt.hash(password, 10);

            
            const usuario = new Usuario({
                email,
                password: hasPassword,
                role: role || 'comun',
            });

            await usuario.save();
            return usuario;
        } catch (error) {
            throw error;
        }
    }
}

export default new UsuarioService();