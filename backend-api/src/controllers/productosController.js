class productosController {
    constructor(){

    }

    async create (req, res) {
        try {
            res.status(201).json({status:'ok'});
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll (req, res) {
        try {
            res.status(201).json({status:'ok'});
        } catch (e) {
            res.status(500).send(e);
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