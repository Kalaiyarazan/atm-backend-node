require("./models/db");
const express = require("express");
const cors = require("cors");
const indexRouter = require("./routes/indexRouter");
const customerRouter = require("./routes/customerRoute");
require("dotenv").config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", indexRouter);
app.use("/customer", customerRouter);

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
