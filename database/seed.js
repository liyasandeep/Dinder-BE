const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  postCode: {
    type: String,
    required: true,
  },
  ratingValue: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  geoLong: {
    type: Number,
    required: true,
  },
  geoLat: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  preferences: {
    type: String,
    required: false,
  },
});

const Restaurant = mongoose.model("Restaurant", restaurantSchema);
const Users = mongoose.model("Users", usersSchema);

module.exports = { Restaurant, Users};
