const express = require("express");
require("../models/db");
const Customer = require("../models/customer");
const indexRouter = express.Router();

indexRouter.get("/", (req, res) => {
  res.send("Index Page");
});

indexRouter.get("/new-customer", (req, res) => {
  res.send(`Your Account Created Successfully`);
});

indexRouter.post("/new-customer", (req, res) => {
  const {
    name = "",
    account_number = "",
    pin = "",
    initial_balance = ""
  } = req.body;

  console.log(name, account_number, pin, initial_balance);
  const NewCustomer = new Customer({
    name,
    account_number,
    pin,
    balance: initial_balance
  });

  NewCustomer.save()
    .then(() => res.json("customer-added!"))
    .catch(err => res.status(400).json("Error:" + err));
});

module.exports = indexRouter;
