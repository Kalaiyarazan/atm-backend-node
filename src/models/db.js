const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  error => (!error ? console.log("db connection success") : console.log(error))
);
