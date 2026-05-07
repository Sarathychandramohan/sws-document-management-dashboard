const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    fileName: String,
    originalName: String,
    size: Number,
    path: String,
    mimeType: String,
    status: {
      type: String,
      default: "uploaded",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("File", fileSchema);