const express = require("express")
const router = express.Router()
const Controller = require("../controller/gastos.controller")

router.get("/gasto", Controller.consultarGastos)

router.get("/categoria", Controller.consultarCategorias)

router.get("/usuario", Controller.consultarUsuarios)
module.exports = router