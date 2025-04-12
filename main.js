// for backEnd
import express from "express";
import bodyParser from "body-parser";

// express.use(bodyParser);
// express.static()

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('main.ejs');
});

app.post('/ticket', (req, res) => {
  res.render('ticket.ejs');
});

app.listen(port, () => {
  console.log(`Server listenging on http://localhost:${port}`);
  
});
