const express = require('express')
const userRouter = require('./routers/user')
const itemRouter = require('./routers/item')
const customerRouter = require('./routers/customer')
const petRouter = require('./routers/pet')
const port = process.env.PORT
require('./db/db')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(itemRouter)
app.use(customerRouter)
app.use(petRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})