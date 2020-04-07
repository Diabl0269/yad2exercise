const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { assetTypes, assetStates, listingTypes } = require('../../data/assetCategories')

module.exports = new Schema(
  {
    listingType: { type: String, required: true, enum: listingTypes },

    //Only for commercial
    dealType: { type: String },

    address: {
      city: { type: String, required: true, trim: true },
      street: { type: String, trim: true },
      streetNumber: Number,
      entrance: Number,
      neighborhood: { type: String, trim: true },
      area: { type: String, trim: true }
    },
    assetDetails: {
      assetState: { type: String, required: true, enum: assetStates },
      assetType: { type: String, required: true, enum: assetTypes },
      balconies: Number,
      description: { type: String, max: 200, trim: true },
      floor: { type: Number, required: true },
      furnitureDescription: { type: String, trim: true },
      parking: Number,
      rooms: Number,
      roomMates: Number,
      squareMetersBuilt: { type: Number, required: true },
      squareMetersGarden: Number,
      totalFloors: { type: Number, require: true }
    },
    saleDetails: {
      price: Number,
      entranceDate: Number
    },
    attributes: {
      exclusivity: {
        exists: Boolean
      },
      airConditioned: {
        exists: Boolean
      },
      kitchen: { exists: Boolean },
      kosherKithecn: {
        exists: Boolean
      },
      lift: { exists: Boolean },
      bars: { exists: Boolean },
      renovated: { exists: Boolean },
      disabledAccess: {
        exists: Boolean
      },
      safeSpace: { exists: Boolean },
      pandorDoor: {
        exists: Boolean
      },
      warehouse: { exists: Boolean },
      tadiranAirConditioned: {
        exists: Boolean
      },
      furniture: { exists: Boolean },
      livingUnit: {
        exists: Boolean
      }
    },
    media: {
      images: [{ type: String }],
      videos: [{ type: String }]
    },
    listingUser: { type: Schema.Types.ObjectId, ref: 'users', required: true }
  },
  {
    timestamps: { createdAt: 'createAt', updatedAt: 'updatedAt' },
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
)
