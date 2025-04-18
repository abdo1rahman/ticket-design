// api/index.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const port = 3000;

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Set up EJS view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views")); // <-- make sure this path is correct

app.use(express.static(path.join(__dirname, "../public"))); // for serving CSS, images, etc.

app.get("/", (req, res) => {
  res.render("main");
});

app.post("/ticket", upload.single("fileUpload"), (req, res) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const githubUsername = req.body.githubUsername;

  const base64 = req.file.buffer.toString("base64");
  const src = `data:${req.file.mimetype};base64,${base64}`;
  const date = new Date();
  const formattedDate = `${date.toLocaleString("en-US", {
    month: "short",
  })} ${date.getDate()}, ${date.getFullYear()}`;

  res.render("ticket", {
    fullName,
    email,
    githubUsername,
    src,
    date: formattedDate,
  });
});

// app.listen(port, () => {
//   console.log(`Listening on  http://localhost:${port}`);
// });

module.exports = app;
