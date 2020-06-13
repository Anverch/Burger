var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", async (req, res)=> {
    const data = await burger.all();
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
});

router.post("/api/burger", async (req, res)=> {
  console.log(req)
  const response = await burger.create(req.body.data.burgerName);
  console.log(response);
  res.render("index");
});

router.put("/api/burger/:id", async (req, res)=> {
  const response = await burger.update(req.params.id);
  console.log(response);
  res.render("index");
});

module.exports = router;