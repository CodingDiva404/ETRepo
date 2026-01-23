# Activity Log Analyzer (Node.js)

A beginner-friendly Node.js application that allows users to upload a `.txt` file containing activity logs and returns statistics about different activity types.  
The server also tracks how many files have been uploaded since it started.

---

## 🚀 Features

- Upload `.txt` files via API
- Read and analyze activity log files
- Count occurrences of each activity
- Track total number of uploaded files (in-memory)
- Return results as JSON

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js** – server and routing
- **Multer** – file upload handling
- **fs** – file system module
- **path** – file path utilities

---

## 📁 Project Structure

activity-log-server/
├── uploads/
├── server.js
├── package.json

yaml
Copy code

---

## 📌 server.js – Detailed Explanation

---

### 1️⃣ Import required modules

```js
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
```

express → creates the server
multer → handles file uploads
fs → reads files from disk
path → helps validate file extensions

2️⃣ Initialize Express server
js
Copy code
const app = express();
const PORT = 3000;
app represents the server

Server listens on port 3000

3️⃣ Track total uploaded files
js
Copy code
let totalFilesUploaded = 0;
Stored in memory

Resets when server restarts

4️⃣ Configure Multer storage
js
Copy code
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
Files are stored in the uploads folder

Timestamp avoids filename conflicts

5️⃣ Allow only .txt files
js
Copy code
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
Validates file extension

Rejects non-text files

6️⃣ Test route
js
Copy code
app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});
Used to verify the server is running

7️⃣ Upload and analyze file route
js
Copy code
app.post("/upload", upload.single("logFile"), (req, res) => {
POST /upload handles file uploads

logFile must match the form-data key

8️⃣ Validate uploaded file
js
Copy code
if (!req.file) {
  return res.status(400).json({ error: "File not received by server" });
}
Prevents crashes if no file is uploaded

9️⃣ Read file content
js
Copy code
const filePath = req.file.path;
const fileData = fs.readFileSync(filePath, "utf-8");
Reads the uploaded .txt file as text

🔟 Process activity logs
js
Copy code
const lines = fileData
  .split("\n")
  .map(line => line.trim())
  .filter(line => line !== "");
Splits file into lines

Removes extra spaces and empty lines

1️⃣1️⃣ Count activity occurrences
js
Copy code
const activityStats = {};

lines.forEach(activity => {
  const key = activity.toUpperCase();
  activityStats[key] = (activityStats[key] || 0) + 1;
});
Uses an object to count frequencies

Case-insensitive counting

1️⃣2️⃣ Increment upload counter
js
Copy code
totalFilesUploaded++;
1️⃣3️⃣ Send API response
js
Copy code
res.json({
  activityStats,
  totalFilesUploaded
});
Returns activity statistics and upload count

1️⃣4️⃣ Start the server
js
Copy code
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
📤 Sample API Response
json
Copy code
{
  "activityStats": {
    "[LOGIN] USER LOGGED IN": 2,
    "[CLICK] BUTTON CLICKED": 1,
    "[LOGOUT] USER LOGGED OUT": 1
  },
  "totalFilesUploaded": 1
}
