const mongoose = require("mongoose");

const crime4Schema = new mongoose.Schema({
  Name: { type: String, required: true },
  Description: { type: String },
  IPC: [{ type: String }],
  Penalty: [{ type: String }]
});

const crime_4 = mongoose.model("crime_4", crime4Schema);

module.exports = crime_4;