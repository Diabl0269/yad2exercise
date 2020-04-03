const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const { success } = require('../utils/messageColor')
const path = require('path')

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../../client/build')))

require('./serverInit')(app)

const successMsg = success(`Server is running on port: ${port}`)

app.listen(port, () => console.log(successMsg))
