const express = require("express");
const router = express.Router();

const multer = require("multer");
const path = require("path");

const File = require("../models/File");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

router.post(
  "/upload",
  upload.array("files"),
  async (req, res) => {
    try {
      const savedFiles = [];

      for (const file of req.files) {
        const newFile = await File.create({
          fileName: file.filename,
          originalName: file.originalname,
          size: file.size,
          path: file.path,
          mimeType: file.mimetype,
        });

        savedFiles.push(newFile);
      }

      res.status(200).json({
        success: true,
        files: savedFiles,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

module.exports = router;