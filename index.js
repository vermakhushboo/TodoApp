const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//models
const TodoTask = require("./models/TodoTask");

dotenv.config();

app.use("/static", express.static("public"));

//extract data from form and add to res body
app.use(express.urlencoded({ extended: true }));

//connection to db
mongoose.connect(process.env.DB_CONNECT, () => {
  console.log("Connected to db!");
  app.listen(3000, () => console.log("Server Up and running"));
});

//View Engine Configuration
app.set("view engine", "ejs");

//GET Method
app.get("/", (req, res) => {
  res.render("todo.ejs");
});

//POST Method
app.post("/", async (req, res) => {
  const todoTask = new TodoTask({
    content: req.body.content,
  });
  try {
    await todoTask.save();
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.redirect("/");
  }
});
