const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
require("dotenv").config();

const mongo = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.sfekxoj.mongodb.net/?retryWrites=true&w=majority`;

const connectDb = async () => {
  const conn = await mongoose.connect(mongo);
  console.log(
    `MongoDB Connected to ${conn.connection.host}`.cyan.underline.bold
  );
};

module.exports = connectDb;
