const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const connectDB = () => {
  return mongoose.connect(
    process.env.DB_CONNECTION,
    {
      useCreateIndex: true,
      useFindAndModify: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("Connection to DB Failed!");
      } else {
          console.log(`DB Connected`);
      }
    }
  );
};

module.exports = connectDB
