const validator = require("validator");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
require("dotenv").config({ path: __dirname + "../../.env" });

const saltLength = 32;

const usersSchema = new Schema({
  salt: {
    type: String,
    required: true,
    default: crypto.randomBytes(Math.ceil(saltLength)).toString("hex")
  },
  password: { type: String, required: true },
  tokens: [{
    token: {
        type: String,
        required: true
    }
}],
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
        if (!validator.isMobilePhone(value, "he-IL") && value !== "") {
          throw Error("Please enter a valid phone number");
        }
      }
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw Error("Please enter a valid email");
        }
      }
    }
  }
});

usersSchema.pre("save", async function(next) {
  const user = this;

  if (user.password.length < 8) throw Error;

  if (user.isModified("password")) {
    user.salt = crypto.randomBytes(Math.ceil(saltLength)).toString("hex");
    user.password = await bcrypt.hash(user.password + user.salt, 8);
  }

  next();
});

usersSchema.methods.toJSON = function() {
  const user = this.toObject();
  delete user.salt;
  delete user.password;
  return user;
};

const tokenLifeTime = 5000;

usersSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {expiresIn: tokenLifeTime});  
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

usersSchema.statics.login = async (email, password) => {  
  const user = await usersModel.findOne({'userDetails.email': email})
  if(!user) return;
  const isMatch = await bcrypt.compare(password + user.salt, user.password)    
  return isMatch ? user : null;
}

const usersModel = mongoose.model("users", usersSchema);

module.exports = usersModel;