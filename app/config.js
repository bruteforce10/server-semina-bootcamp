const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  urlDb: process.env.URL_MONGODB_DEV,
  jwtExpiration: "24h",
  jwtSecret: "sadasdsa",
  gmail: process.env.GMAIL,
  password: process.env.PASSWORD,
};
