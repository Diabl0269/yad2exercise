const mongoose = require("mongoose");
const moment = require('moment');
const Schema = mongoose.Schema;
require('./usersModel');

const assetTypes = [
  "דירה",
  "דירת גן",
  "פרטי/קוטג'",
  "גג/פנטהאוז",
  "מגרשים",
  "דופלקס",
  "דירת נופגש",
  "דו משפחתי",
  "מרתף/פרטר",
  "טריפלקס",
  "יחידת דיור",
  "משק חקלאי/נחלה",
  "משק עזר",
  "דיור מוגן",
  "סטודיו/לופט",
  "מחסן",
  "קב' רכישה/זכות לנכס",
  "חניה",
  "כללי"
];

const assetStates = [
  "חדש מקבלן(לא גרו בנכס)",
  "חדש(גרו בנכס)",
  "משופץ",
  "במצב שמור",
  "דרוש שיפוץ"
];

const listingSchema = new Schema({
  address: {
    assetType: { type: String, required: true, enum: assetTypes },
    assetState: { type: String, required: true, enum: assetStates },
    city: { type: String, required: true },
    street: String,
    streetNumber: Number,
    entrance: Number,
    neighborhood: String,
    area: String,
    reciveMonthlyUpdates: Boolean
  },
  assetDetails: {
    floor: { type: Number, required: true },
    totalFloors: { type: Number, require: true },
    handicapAccessible: { type: Boolean, required: true, default: false },
    description: { type: String, max: 200 },
    rooms: Number,
    squareMeters: { type: Number, required: true },
  },
  saleDetails: {
    price: Number,
    entranceDate: { type: Date }
  },
  attributes: {
    airConditioned: { type: Boolean, required: true },
    kitchen: { type: Boolean, required: true },
    lift: { type: Boolean, required: true },
    bars: { type: Boolean, required: true },
    renovated: { type: Boolean, required: true },
    disabledAccess: { type: Boolean, required: true },
    safeSpace: { type: Boolean, required: true },
    pandorDoor: { type: Boolean, required: true },
    warehouse: { type: Boolean, required: true },
    tadiranAirConditioned: { type: Boolean, required: true },
    furniture: { type: Boolean, required: true },
    livingUnit: { type: Boolean, required: true }
  },
  media: {
    imageBase64: [{ type: String }],
    videoBase64: [{ type: String }]
  },
  createdAt: {type: String, default: moment().format()},
  updatedAt: {type: String, default: moment().format()},
  listingUser: { type: Schema.Types.ObjectId, ref: "users", required: true }
});

const listingsModel = mongoose.model("listings", listingSchema);

module.exports = listingsModel;

const mockAptForSale = {
  address: {
    assetType: "טריפלקס",
    assetState: "משופץ",
    city: "מודיעין",
    street: "המודיענים",
    streetNumber: 13,
    entrance: 2,
    neighborhood: "מזרח העיר",
    area: "מזרח",
    reciveMonthlyUpdates: true
  },
  assetDetails: {
    floor: 11,
    totalFloors: 15,
    handicapAccessible: true,
    description: "בסדר הדירה הזאת"
  },
  saleDetails: {
    squareMeters: 133,
    price: 1500000,
    entrance: Date.now()
  },
  media: {
    imageBase64: null,
    videoBase64: null
  },
  attributes: {
    airConditioned: true,
    kitchen: true,
    lift: false,
    bars: false,
    renovated: false,
    disabledAccess: false,
    safeSpace: false,
    pandorDoor: false,
    warehouse: false,
    tadiranAirConditioned: true,
    furniture: true,
    livingUnit: false
  },
  listingUser: "5e427983a5054338544fbaa0"
};

// const mockListingRecord = new listingsModel(mockAptForSale);

// mockListingRecord.save((err, res) =>{
//   if(err) console.log(err);
//   else console.log('success');
//   ;
// });

// listingsModel.create(mockAptForSale, (err, created) => {
//   if (err) console.log(err);
//   else {
//     // created.populate("listingUser");
//     console.log('success');
//   }
// }).then(t => console.log(t));

