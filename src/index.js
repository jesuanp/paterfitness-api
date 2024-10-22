const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

// DB
const { sequelize, connection } = require('./db.js')

// Environment variables
require('dotenv').config()

// Routes
const router = require('./routes/index.js')

const app = express();

app.use(morgan('dev'))
app.use(express.json())
app.use(cors({
    origin: '*'
}))

// Port
const PORT = process.env.PORT

app.use('/api', router)

connection()

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})
