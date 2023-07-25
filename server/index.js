require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/index')
const sequelize = require('./db')

const PORT = 5000

const app = express()
app.use(cors({origin: '*'}))
app.use(express.json())
app.use('/api',router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start().then()


