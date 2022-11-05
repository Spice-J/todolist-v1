//jshint esversion:6

const express = require("express");

const app = express();



app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ["buy food", "cook food", "eat food"];

app.get("/", function (req, res) {
  let currentDay = new Date();

  let options = {
    weekday: 'long',
    day: "numeric",
    month: "long"
  };

  let day = currentDay.toLocaleString("en-US", options);

  res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", function(req, res) {
   let item = req.body.newItem;

   items.push(item);

    res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000.");
});
