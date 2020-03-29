const validator = require('validator')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const crypto = require('crypto')

const saltLength = 32

module.exports = new Schema({
  salt: {
    type: String,
    required: true,
    default: crypto.randomBytes(Math.ceil(saltLength)).toString('hex')
  },
  password: { type: String, required: true },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ],
  listings: [
    {
      type: Schema.Types.ObjectId,
      ref: 'listings'
    }
  ],
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: 'listings'
    }
  ],
  userDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, 'he-IL')) {
          throw Error('Please enter a valid phone number')
        }
      }
    },
    phone2: {
      type: String,
      validate(value) {
        if (!validator.isMobilePhone(value, 'he-IL') && value !== '') {
          throw Error('Please enter a valid phone number')
        }
      }
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw Error('Please enter a valid email')
        }
      }
    },
    agencyName: { type: String }
  }
})
