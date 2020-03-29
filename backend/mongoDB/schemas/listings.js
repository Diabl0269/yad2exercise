const mongoose = require('mongoose')
const Schema = mongoose.Schema
const {
  assetTypes,
  assetStates,
  listingTypes
} = require('../../data/assetCategories')


module.exports = new Schema(
  {
    listingType: { type: String, required: true, enum: listingTypes },
    address: {
      city: { type: String, required: true },
      street: String,
      streetNumber: Number,
      entrance: Number,
      neighborhood: String,
      area: String
    },
    assetDetails: {
      assetState: { type: String, required: true, enum: assetStates },
      assetType: { type: String, required: true, enum: assetTypes },
      balconies: Number,
      description: { type: String, max: 200 },
      floor: { type: Number, required: true },
      furnitureDescription: String,
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
        text: { type: String, default: 'בלעדיות' },
        exists: Boolean
      },
      airConditioned: {
        text: { type: String, default: 'מיזוג' },
        exists: Boolean
      },
      kitchen: { text: { type: String, default: 'מטבח' }, exists: Boolean },
      kosherKithecn: {
        text: { type: String, default: 'מטבח כשר' },
        exists: Boolean
      },
      lift: { text: { type: String, default: 'מעלית' }, exists: Boolean },
      bars: { text: { type: String, default: 'סורגים' }, exists: Boolean },
      renovated: { text: { type: String, default: 'משופצת' }, exists: Boolean },
      disabledAccess: {
        text: { type: String, default: 'גישה לנכים' },
        exists: Boolean
      },
      safeSpace: { text: { type: String, default: 'ממ"ד' }, exists: Boolean },
      pandorDoor: {
        text: { type: String, default: 'דלתות פנדור' },
        exists: Boolean
      },
      warehouse: { text: { type: String, default: 'מחסן' }, exists: Boolean },
      tadiranAirConditioned: {
        text: { type: String, default: 'מזגן תדיראן' },
        exists: Boolean
      },
      furniture: { text: { type: String, default: 'ריהוט' }, exists: Boolean },
      livingUnit: {
        text: { type: String, default: 'יחידת דיור' },
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
