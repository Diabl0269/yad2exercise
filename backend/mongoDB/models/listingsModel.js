const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
require("./usersModel");

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

const listingSchema = new Schema(
  {
    address: {
      city: { type: String, required: true },
      street: String,
      streetNumber: Number,
      entrance: Number,
      neighborhood: String,
      area: String,
      reciveMonthlyUpdates: Boolean
    },
    assetDetails: {
      assetType: { type: String, required: true, enum: assetTypes },
      assetState: { type: String, required: true, enum: assetStates },
      balconies: Number,
      description: { type: String, max: 200 },
      floor: { type: Number, required: true },
      furnitureDescription: String,
      parking: Number,
      totalFloors: { type: Number, require: true },
      rooms: Number,
      squareMetersBuilt: { type: Number, required: true },
      squareMetersGarden: Number
    },
    saleDetails: {
      price: Number,
      entranceDate: String
    },
    attributes: {
      exclusivity: {text: {type: String, default: 'בלעדיות'}, exists: Boolean},
      airConditioned: {text: {type: String, default: 'מיזוג'}, exists: Boolean},
      kitchen: {text: {type: String, default: 'מטבח'}, exists: Boolean},
      kosherKithecn: {text: {type: String, default: 'מטבח כשר'}, exists: Boolean},
      lift: {text: {type: String, default: 'מעלית'}, exists: Boolean},
      bars: {text: {type: String, default: 'סורגים'}, exists: Boolean},
      renovated: {text: {type: String, default: 'משופצת'}, exists: Boolean},
      disabledAccess: {text: {type: String, default: 'גישה לנכים'}, exists: Boolean},
      safeSpace: {text: {type: String, default: 'ממ"ד'}, exists: Boolean},
      pandorDoor: {text: {type: String, default: 'דלתות פנדור'}, exists: Boolean},
      warehouse: {text: {type: String, default: 'מחסן'}, exists: Boolean},
      tadiranAirConditioned: {text: {type: String, default: 'מזגן תדיראן'}, exists: Boolean},
      furniture: {text: {type: String, default: 'ריהוט'}, exists: Boolean},
      livingUnit: {text: {type: String, default: 'יחידת דיור'}, exists: Boolean}
    },
    media: {
      imageBase64: [{ type: String }],
      videoBase64: [{ type: String }]
    },
    createdAt: { type: String, default: moment().format() },
    updatedAt: { type: String, default: moment().format() },
    listingUser: { type: Schema.Types.ObjectId, ref: "users", required: true }
  },
  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

listingSchema.virtual("assetDetails.totalSquareMeters").get(function() {
  return this.assetDetails.squareMetersGarden
    ? this.assetDetails.squareMetersGarden + this.assetDetails.squareMetersBuilt
    : this.assetDetails.squareMetersBuilt;
});

listingSchema.index({ "$**": "text" })

const listingsModel = mongoose.model("listings", listingSchema);

module.exports = listingsModel;

// const mockAptForSale = {
//   address: {
//     city: "מודיעין",
//     street: "המודיענים",
//     streetNumber: 13,
//     entrance: 2,
//     neighborhood: "מזרח העיר",
//     area: "מזרח",
//     reciveMonthlyUpdates: true
//   },
//   assetDetails: {
//     assetType: "טריפלקס",
//     assetState: "משופץ",
//     floor: 11,
//     rooms: 4,
//     totalFloors: 15,
//     furnitureDescription: "ריהוט מטורף, ממש יפה, כדאי לקנות",
//     description: "בסדר הדירה הזאת",
//     squareMetersBuilt: 133,
//     squareMetersGarden: 100
//   },
//   saleDetails: {
//     price: 1500000,
//     entrance: Date.now()
//   },
//   media: {
//     imageBase64: null,
//     videoBase64: null
//   },
//   attributes: {
//     airConditioned: {exists: true},
//     kitchen: {exists: true},
//     lift: {exists: false},
//     bars: {exists: false},
//     renovated: {exists: false},
//     disabledAccess: {exists: false},
//     safeSpace: {exists: false},
//     pandorDoor: {exists: false},
//     warehouse: {exists: false},
//     tadiranAirConditioned: {exists: true},
//     furniture: {exists: true},
//     livingUnit: {exists: false}
//   },
//   listingUser: "5e4a6ee46f74d85594c322e4"
// };

// const mockListingRecord = new listingsModel(mockAptForSale);


//   mockListingRecord.save((err, res) =>{
//     if(err) console.log(err);
//     else console.log('success');
//     ;
//   });


// listingsModel.create(mockAptForSale);
// , (err, created) => {
//   if (err) console.log(err);
//   else {
//     // created.populate("listingUser");
//     console.log('success');
//   }
// }).then(t => console.log(t));
