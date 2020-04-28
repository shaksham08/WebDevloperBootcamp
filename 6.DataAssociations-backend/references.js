const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

var Post = mongoose.model("Post", postSchema);

var UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

var User = mongoose.model("User", UserSchema);

// User.create(
//   {
//     email: "shakshamsinha08@gmail.com",
//     name: "shaksham sinha",
//   },
//   (err, user) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(user);
//     }
//   }
// );

// Post.create(
//   {
//     title: "litchie",
//     content: "lithie is best",
//   },
//   (err, post) => {
//     User.findOne({ email: "shakshamsinha08@gmail.com" }, (err, foundUser) => {
//       if (err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save((err, data) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(data);
//           }
//         });
//       }
//     });
//   }
// );

// User.findOne({ email: "shakshamsinha08@gmail.com" }, (err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// User.findOne({ email: "shakshamsinha08@gmail.com" }, (err, user) => {
//   if (err) {
//     console.log(err);
//   }
// })
//   .populate("posts")
//   .exec((err, post) => {
//     console.log(post);
//   });
