const express = require("express")
const app = express()
const router = require("./routers/router")


app.use("/api", router)

app.listen(3000, () => {
  console.log('Subido Al Navegador ${3000}')
})