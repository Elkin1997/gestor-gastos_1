const express = require("express")
const path = require("path")
const app = express()
const router = require("./router/router")


app.use("/api", router)
app.use(express.static(path.join(__dirname, "../frontend")))

app.listen(3000, () => {
  console.log('Subido Al Navegador ${3000}')
})