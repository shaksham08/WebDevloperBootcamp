var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true })); // to use our body parser

var friends = ["harry", "hermoine", "john", "sherlock"];

app.set("view engine", "ejs");
app.use(express.static("public/css"));

app.get("/", function(req, res) {
  res.render("index");
});

app.post("/addfriends", function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.get("/friends", function(req, res) {
 
  res.render("friends", { friends: friends });
});

app.listen(3000, function() {
  console.log("server is running up");
});
