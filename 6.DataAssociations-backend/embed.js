const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var postSchema = mongoose.Schema({
  title: String,
  content: String,
});

var postModel = mongoose.model("Post", postSchema);

var UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema],
});

//! there this is one to many relationship as one user can have many post

var User = mongoose.model("User", UserSchema);

// let newUser = new User({
//   email: "shakshamsinha@outlook.com",
//   name: "ShakshamSinga",
// });

// newUser.posts.push({
//   title: "hwo ot read",
//   content: "learn something",
// });

// newUser.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// let newPost = new postModel({
//   title: "Reflection on apple",
//   content: "they are apples",
// });

// newPost.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({ name: "ShakshamSinga" }, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "kil everyone",
      content: "just koking",
    });

    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
