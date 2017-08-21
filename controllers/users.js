const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get("/", (req,res) => {
  User.find().then(users => {
    res.json(users);
  })
});

//router.get("/:id", (req,res) => {
//  User.findById(req.params.id).then((users) => {
//    res.json(users);
//  });
//});


/*
router.post("/login", (req, res) => {
  const user_name = req.body.user_name;
  const pass_code = req.body.pass_code;
  console.log('Login route was hit' + user_name + pass_code)
  User.find()
    .then((users) => {
      const userToSearch = users.find((user) => {
      return user.user_name === user_name
    })
    res.json(userToSearch)
  })
});
*/
module.exports = router;