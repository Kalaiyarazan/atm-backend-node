const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CustomerSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  account_number: {
    type: Number,
    required: true
  },
  pin: {
    type: Number,
    required: true
  },
  balance: {
    type: Number,
    required: true
  }
});

const Customer = model("Customer", CustomerSchema);

module.exports = Customer;
