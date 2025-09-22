const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("DB KA connection is successe"))
    .catch((err) => {
      console.log("issue in DB connection");
      console.error(err.message);
      process.exit(1);
    });
};

module.exports = dbConnect;
