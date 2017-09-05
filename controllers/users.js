const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get("/", (req,res) => {
  User.find({}).then((users) => {
    res.json(users);
  })
});

router.get("/:id", (req,res) => {
  User.findById(req.params.id).then((users) => {
    res.json(users);
  });
});

router.post("/",(req,res)=>{
  const addUser = new User();
  console.log(req.body);
  addUser.user_name = req.body.newUser.user_name;
  addUser.pass_code = req.body.newUser.pass_code;
  addUser.save().then((user)=>{
    res.json(user);
  }).catch(err => console.log(err));
});

//router.post("/login", (req, res) => {
//  const user_name = req.body.user_name;
//  const pass_code = req.body.pass_code;
//  console.log('Login route was hit' + user_name + pass_code)
//  User.find()
//    .then((users) => {
//      const userToSearch = users.find((user) => {
//      return user.user_name === user_name
//    })
//    res.json(userToSearch)
//  })
//});

module.exports = router;