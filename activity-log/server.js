const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// 🔢 counter for total uploads (resets when server restarts)
let totalFilesUploaded = 0;

// 📂 multer configuration (where files go)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

// 🧾 allow only .txt files
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (path.extname(file.originalname) === ".txt") {
      cb(null, true);
    } else {
      cb(new Error("Only .txt files are allowed"));
    }
  }
});

// 🏠 test route
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

// 📤 upload route
app.post("/upload", upload.single("logFile"), (req, res) => {
  try {
    const filePath = req.file.path;

    // 📖 read file
    const fileData = fs.readFileSync(filePath, "utf-8");

    // 🧠 process logs
    const lines = fileData
      .split("\n")
      .map(line => line.trim())
      .filter(line => line !== "");

    const activityStats = {};

    lines.forEach(activity => {
      const key = activity.toUpperCase();
      activityStats[key] = (activityStats[key] || 0) + 1;
    });

    // ➕ increment upload counter
    totalFilesUploaded++;

    // 📤 response
    res.json({
      activityStats,
      totalFilesUploaded
    });

  } catch (error) {
    res.status(500).json({ error: "File processing failed" });
  }
});

// 🚀 start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
