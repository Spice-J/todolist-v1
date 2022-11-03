//jshint esversion:6

const express = require("express");

const app = express();

app.get("/", function(req, res) {

    var today = new Date();
    var currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0) {
        res.write("<h1>Yay it's the weekend!</h1>");
    } else {
        res.sendFile(__dirname + "/index.html");
    }

});






app.listen(3000, function(req, res) {
    console.log("Server started on port 3000.");
});