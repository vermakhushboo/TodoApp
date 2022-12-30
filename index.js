const express = require("express");
const app = express();

app.use("/static", express.static("public"));

//extract data from form and add to res body
app.use(express.urlencoded({extended: true}));

//View Engine Configuration
app.set("view engine", "ejs");

//GET Method
app.get('/', (req, res) => {
    res.render("todo.ejs");
})

//POST Method
app.post('/', (req, res) => {
    console.log(req.body);
})

app.listen(3000, () => console.log("Server up and running!"));