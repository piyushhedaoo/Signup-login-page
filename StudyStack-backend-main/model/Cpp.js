const mongoose = require("mongoose");

const CppSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
    unique:true
  },
  Description: {
    type: String,
    default: "CPP Programming Lecture",
  },
  videoLink: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

// Creating a unique index on the 'day' field
CppSchema.index({ day: 1 }, { unique: true });

const Cpp = mongoose.model("cpp", CppSchema);
module.exports = Cpp;
