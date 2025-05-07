const express = require('express')
const app = express()
const port = 3000

//routes declaration
const userRoutes = require("./routes/userRoutes.js")
const productRoutes = require("./routes/productRoutes")

app.use(express.json())

//using different routes
app.use('/users', userRoutes)
app.use('/products', productRoutes)

//app initialization
app.listen(port, () => {
    console.log("running on port: ", port)
})