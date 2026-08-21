const db = require("../config/db");

class GastosModel {

    static async consultarGastos() {
            const resultados = await db.query("SELECT * FROM categorias")    
            return resultados



    }

}


