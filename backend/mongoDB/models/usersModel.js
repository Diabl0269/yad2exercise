const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const phonePrefixes = ["050", "051", "052", "053", "054", "055", "058"];

const usersSchema = new Schema({
  salt: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phonePrefix: { type: String, required: true, enum: phonePrefixes },
  phone: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isMobilePhone(value)) {
        throw Error("Please enter a valid phone number");
      }
    }
  },
  address: {
    city: { type: String, required: true },
    neighborhood: String,
    street: String,
    streetNumber: Number,
    area: String,
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
  birthDate: { type: Date, validate: /^\d{1,2}\/\d{1,2}\/\d{4}$/ }
});

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;

const mockUser = {
  salt: "123",
  hashedPassword: "abc123",
  firstName: "טל",
  lastName: "עפרוני",
  phonePrefix: "054",
  phone: "4162895",
  address: {
    city: "תל אביב",
    neighborhood: "רמת אביב",
    street: "אבן גבירול",
    streetNumber: 3,
    area: "מרכז",
    email: "what@gmail.com",
    birthDate: "03/02/1948"
  },
  listings: [{ type: Schema.Types.ObjectId, ref: "listings" }]
};