const jwt = require('jsonwebtoken')
require('dotenv').config({ path: __dirname + '/../.env' })
const { failure } = require('../utils/messageColor')

module.exports = async (req, res, next) => {
    
  const errorMessage = 'User authentication failed \n'
  const successMessage = 'User authentication succefully \n'
  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    const decoded = await jwt.verify(token, process.env.JWT_SECRET)
    const { _id } = decoded
    req.userID = _id
    req.message = successMessage
    next()
  } catch (e) {
    console.log(failure(errorMessage), e)
    res.sendStatus(401)
  }
}
