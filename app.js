//jshint esversion:6

const express = require("express");

const app = express();



app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

var items = [];

app.get("/", function (req, res) {
  var currentDay = new Date();

  var options = {
    weekday: 'long',
    day: "numeric",
    month: "long"
  };

  var day = currentDay.toLocaleString("en-US", options);

  res.render("list", { kindOfDay: day, newListItem: items });
});

app.post("/", function(req, res) {
   var item = req.body.newItem;

   items.push(item);

    res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000.");
});
