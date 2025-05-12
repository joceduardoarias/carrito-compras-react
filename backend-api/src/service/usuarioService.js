import Usuario from '../models/usuario.js';
import bcrypt from 'bcrypt';

class UsuarioService {
    async login(email, password) {
        try {
            
            const usuario = await Usuario.findOne({ email });
            if (!usuario) {
                throw new Error('Usuario no encontrado');
            }

            
            const isPasswordValid = await bcrypt.compare(password, usuario.password);
            if (!isPasswordValid) {
                throw new Error('Contraseña incorrecta');
            }

            return usuario;
        } catch (error) {
            throw error;
        }
    }
}

export default new UsuarioService();