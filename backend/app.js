const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const router = require("./routes/routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  (err) => {
    if (err) throw err;
    console.log("Connected to DB");
  }
);

app.use("/api", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
