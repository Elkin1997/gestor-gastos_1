const model = require("../model/gastos.model");

class GastosController {

    static async consultarGastos(req, res) {
        try {
            const movimiento = await model.consultarGastos();
            res.status(200).json({ data: movimiento });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensaje: "Error al consultar los gastos" });
        }
    }

    static async consultarCategorias(req, res) {
        try {
            const categoria = await model.consultarCategorias();
            res.status(200).json({ data: categoria });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensaje: "Error al consultar las categorías" });
        }
    }

    static async consultarUsuarios(req, res) {
        try {
            const usuario = await model.consultarUsuarios();
            res.status(200).json({ data: usuario });
        } catch (error) {
            console.error(error);
            res.status(500).json({ mensaje: "Error al consultar los usuarios" });
        }
    }

}

module.exports = GastosController;