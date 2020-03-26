const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
require('dotenv').config({ path: __dirname + '../../.env' })
const schema = require('../schemas/users')

const saltLength = 32

schema.pre('save', async function(next) {
  const user = this

  if (user.password.length < 8) throw Error

  if (user.isModified('password')) {
    user.salt = crypto.randomBytes(Math.ceil(saltLength)).toString('hex')
    user.password = await bcrypt.hash(user.password + user.salt, 8)
  }

  next()
})

schema.methods.toJSON = function() {
  const user = this.toObject()
  delete user.salt
  delete user.password
  return user
}

const tokenLifeTime = 10000

schema.methods.generateAuthToken = async function() {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
    expiresIn: tokenLifeTime
  })
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

schema.methods.filterExpiredTokens = async function() {
  const user = this
  let tokens
  tokens = user.tokens.filter(token => {
    return jwt.verify(token.token, process.env.JWT_SECRET, (err, res) =>
      err && err.name === 'TokenExpiredError' ? false : true
    )
  })
  if (tokens.length !== user.tokens.length) {
    user.tokens = tokens
    try {
      await user.save()
    } catch (e) {
      console.log(e)
    }
  }
  return
}

schema.statics.login = async (email, password) => {
  const user = await usersModel.findOne({ 'userDetails.email': email })
  
  if (!user) return
  await user.filterExpiredTokens()
  const isMatch = await bcrypt.compare(password + user.salt, user.password)  
  await user.generateAuthToken()
  return isMatch ? user : null
}
const usersModel = mongoose.model("users", schema);

module.exports = usersModel;
