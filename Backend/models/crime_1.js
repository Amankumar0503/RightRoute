const mongoose = require("mongoose");

const crime1Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String },
  sub: [{ type: mongoose.Schema.Types.ObjectId, ref: "crime1" }] // Assuming Crime2 is the related model
});

const crime_1 = mongoose.model("crime_1", crime1Schema);

module.exports = crime_1;
