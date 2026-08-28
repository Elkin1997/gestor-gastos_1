const express = require("express")
const router = express.Router()
const Controller = require("../controller/gastos.controller")

router.get("/gasto", Controller.consultarGastos)

module.exports = router