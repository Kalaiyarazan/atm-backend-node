const express = require("express");
const Customer = require("../models/customer");

const customerRouter = express.Router();

customerRouter.get("/:id", (req, res) => {
  Customer.find({ account_number: req.params.id })
    .then(customer => res.json(customer))
    .catch(err => res.send(400).json("Error" + err));
});

customerRouter.put("/:id", (req, res) => {
  Customer.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(customer => console.log("response After Put: " + customer))
    .catch(err => console.log("Error After Put: " + err));
});
module.exports = customerRouter;
