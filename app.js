//jshint esversion:6

const express = require("express");
const getDate = require("./date");
const date = require(__dirname + "/date.js");

const app = express();



app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["buy food", "cook food", "eat food"];
const workItems = [];

app.get("/", function (req, res) {

  const day = date.getDate();

  res.render("list", { listTitle: day, newListItems: items });

});

app.post("/", function(req, res) {

  const item = req.body.newItem;

if (req.body.list === "Work") {
  workItems.push(item);
  res.redirect("/work");
} else {
  items.push(item);
  res.redirect("/");
}
});

app.get("/work", function(req, res) {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

app.get("/about", function(req, res) {
 res.render("about");
});

app.post("/work", function(req, res) {
  const item = req.body.newItem;
  workItems.push(item);

  req.redirect("/work");
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000.");
});
