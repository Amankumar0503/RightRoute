const mongoose = require("mongoose");

const crime_4 = new mongoose.Schema({
    Name: { type: String, required: true },
    Description: { type: String },
    IPC: [{ type: Number }],
    Penalty: [{ type: String }]
});

const crime_3 = new mongoose.Schema({
    Name: { type: String, required: true },
    Description: { type: String },
    sub: [{ type: mongoose.Schema.Types.ObjectId, ref: "crime_3" }]
});

const crime_2 = new mongoose.Schema({
    Name: { type: String, required: true },
    Description: { type: String },
    sub: [{ type: mongoose.Schema.Types.ObjectId, ref: "crime_2" }]
});

const Section = mongoose.model("Section", crime_2);

module.exports = Section;
