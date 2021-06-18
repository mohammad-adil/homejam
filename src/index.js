const express = require('express')
const app = express()
const bp = require('body-parser')

const Pathrouter = require('./router/router')
const port = process.env.PORT || 3000
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(Pathrouter)


app.listen(port, () => {

    console.log("Server Started at " + port)
})

