const express = require("express");
const app = express();

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blod_demo2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var Post = require("./models/post");
var User = require("./models/user");

Post.create(
  {
    title: "How to cook the best burger pt. 4",
    content: "AKLSJDLAKSJD",
  },
  function (err, post) {
    User.findOne({ email: "shaksham@gmail.com" }, function (err, foundUser) {
      if (err) {
        console.log(err);
      } else {
        foundUser.posts.push(post);
        foundUser.save(function (err, data) {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
);

// Post.create(
//   {
//     title: "How to cook the best burger pt. 4",
//     content: "AKLSJDLAKSJD",
//   },
//   function (err, post) {
//     User.findOne({ email: "shaksham@gmail.com" }, function (err, foundUser) {
//       if (err) {
//         console.log(err);
//       } else {
//         foundUser.posts.push(post);
//         foundUser.save(function (err, data) {
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

// Find user
// find all posts for that user

// User.findOne({ email: "shaksham@gmail.com" })
//   .populate("posts")
//   .exec(function (err, user) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(user);
//     }
//   });

// User.create({
//   email: "shaksham@gmail.com",
//   name: "Shaksham SInha",
// });
