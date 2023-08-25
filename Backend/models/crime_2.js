const mongoose = require("mongoose");

const crime1Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String },
  sub: [{ type: mongoose.Schema.Types.ObjectId, ref: "crime_2" }] // Assuming Crime2 is the related model
});

const crime_2 = mongoose.model("crime_2", crime1Schema);

module.exports = crime_2;