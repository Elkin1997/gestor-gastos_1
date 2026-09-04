const db = require("../config/db");

class GastosModel {

   

    static async consultarCategorias() {
        const [resultados] = await db.query("SELECT * FROM categoria");
        return resultados;
    }

    static async consultarGastos() {
        const [resultados] = await db.query("SELECT * FROM gasto");
        return resultados;
    }

    static async consultarUsuarios() {
        const [resultados] = await db.query("SELECT * FROM usuario");
        return resultados;
    }

}

module.exports = GastosModel;
 

