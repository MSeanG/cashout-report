const express = require("express");
const ReportList = require("../models/cash-out-report-list");
const Report = require("../models/cash-out-report");
const router = express.Router();

router.get("/", (req, res) => {
  ReportList.find().then((lists) => {
    res.json(lists);
  });
});

router.post("/", (req, res) => {
  const newCategory = new Category();
  console.log(req.body);
  newCategory.name = req.body.category.name;
  
  const newQuestions = req.body.category.questions.map((question) => {
    return new Question(question);
  });

  newCategory.questions = newQuestions;

  newCategory.save().then((category) => {
    res.json(category);
  }).catch(err => console.log(err));
})

module.exports = router;