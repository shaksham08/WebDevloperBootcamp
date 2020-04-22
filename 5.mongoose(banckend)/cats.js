var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

//this is just a model

var Cat = mongoose.model("Cat", catSchema);

// //now we can do cat.find or cat.create many more

// var george = new Cat({
//   name: "George",
//   age: 11,
//   temperament: "Grouchy"
// });

// george.save(function(err, cat) {
//   if (err) {
//     console.log("something went wrong");
//   } else {
//     console.log("everything fine");
//     console.log(cat);
//   }
// });
