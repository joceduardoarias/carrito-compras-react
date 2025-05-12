import UsuarioService from '../service/usuarioService.js';

class UsuariosController {
    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({ error: 'Email y contraseña son requeridos' });
            }
            
            const usuario = await UsuarioService.login(email, password);
            
            res.status(200).json({ message: 'Login exitoso', usuario });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

export default new UsuariosController();