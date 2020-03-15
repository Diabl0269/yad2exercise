const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config({ path: __dirname + "/../.env" });

const saltLength = 32;

const usersSchema = new Schema({
  salt: {
    type: String,
    required: true,
    default: crypto.randomBytes(Math.ceil(saltLength)).toString("hex")
  },
  password: { type: String, required: true },
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
        if (!validator.isMobilePhone(value, "he-IL") && value !== '') {
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
  }
});

usersSchema.methods.generateAuthToken = async () => {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

usersSchema.pre("save", async function (next ) {
  const user = this;
  console.log(user);

  if(user.password.length < 8) 
    throw Error;

  // if (user.isModified("password")) {
    // user.password = await bcrypt.hash(user.password + user.salt, 8);
  // }

  next();
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
    phone2: "0523158674",
    email: "what@gmail.com"
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
