const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonePrefixes = ["050", "051", "052", "053", "054", "055", "058"];

const usersSchema = new Schema({
  salt: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  userDetails: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw Error("Please enter a valid phone number");
        }
      }
    },
    phone2: {
      type: String,
      validate(value) {
        if (!validator.isMobilePhone(value, "he-IL")) {
          throw Error("Please enter a valid phone number");
        }
      }
    },
    email: {
      type: String,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw Error("Please enter a valid email");
        }
      }
    }
  },
  address: {
    city: { type: String, required: true },
    neighborhood: String,
    street: String,
    streetNumber: Number,
    area: String
  },
  birthDate: { type: Date, validate: /^\d{1,2}\/\d{1,2}\/\d{4}$/ }
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;

const mockUser = {
  salt: "123",
  hashedPassword: "abc123",
  userDetails: {
    firstName: "טל",
    lastName: "עפרוני",
    phone: "0544162895",
    phone2: '0523158674',
    email: "what@gmail.com",

  },
    address: {
      city: "תל אביב",
      neighborhood: "רמת אביב",
      street: "אבן גבירול",
      streetNumber: 3,
      area: "מרכז",
      birthDate: "03/02/1948"
    },
  listings: [{ type: Schema.Types.ObjectId, ref: "listings" }]
};


// usersModel.create(mockUser)