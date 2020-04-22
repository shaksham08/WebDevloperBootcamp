var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/post", function (req, res) {
  var posts = [
    { title: "post 1", author: "susy" },
    { title: "this is world", author: "rohan" },
    { title: "learn something", author: "aurther" },
  ];
  res.render("posts", { posts: posts });
});

app.get("/fallinlovewith/:thing", function (req, res) {
  var thingvar = req.params.thing;
  res.render("love", { thing: thingvar });
});

app.get("*", function (req, res) {
  res.send("Not found");
});
//this is to start the server at the localhost 3000
app.listen("3000", function () {
  console.log("the server is running up");
});
