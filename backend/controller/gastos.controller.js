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
}

module.exports = GastosController;