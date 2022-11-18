const express = require("express");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
const path = require('path')

const filesRouter = require("./routes/files");
const createRouter = require("./routes/create");
const editRouter = require("./routes/edit");
const removeRouter = require("./routes/remove");

const PORT = 8080;

const app = express();
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(filesRouter);
app.use(createRouter);
app.use(editRouter);
app.use(removeRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alyamba:qwer1234@cluster0.fmv5giv.mongodb.net/files"
    );
    app.listen(PORT, () => {
      console.log("Server has been started...");
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

start();
