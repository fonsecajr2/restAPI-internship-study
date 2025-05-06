const express = require('express')
const app = express()
const port = 3000
const users = require('./models/userModel.js')

const userRoutes = require("./routes/userRoutes.js")
const productRoutes = require("./routes/productRoutes")

app.use(express.json())

app.use('/users', userRoutes)
app.use('/products', productRoutes)


app.listen(port, () => {
    console.log("running on port: ", port)
})