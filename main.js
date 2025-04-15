// for backEnd
import express from "express";
import multer from "multer";

const app = express();
const port = 3000;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("main.ejs");
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

  res.render("ticket.ejs", {
    fullName: fullName,
    email: email,
    githubUsername: githubUsername,
    src: src,
    date: formattedDate,
  });
});

app.listen(port, () => {
  console.log(`Server listenging on http://localhost:${port}`);
});
