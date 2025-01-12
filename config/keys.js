const dotenv = require("dotenv");

dotenv.config();

const KEYS = {
  PORT: process.env.PORT,
  // Path to Home
  HOME: process.env.HOME,
  LOG_DIR: "./logs",
  MONGO_URI: process.env.MONGO_URI,
};

module.exports = {
  KEYS,
};
