require('./usersModel')
const schema = require('../schemas/listings')
const mongoose = require('mongoose')

schema.virtual('assetDetails.totalSquareMeters').get(function() {
  return this.assetDetails.squareMetersGarden
    ? this.assetDetails.squareMetersGarden + this.assetDetails.squareMetersBuilt
    : this.assetDetails.squareMetersBuilt
})

schema.index({ '$**': 'text' })

module.exports = mongoose.model('listings', schema)
