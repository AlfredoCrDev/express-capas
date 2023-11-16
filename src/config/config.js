const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  privateKey: process.env.PRIVATE_KEY,
  sessionSecret: process.env.SESSION_SECRET,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  secretOrKey: process.env.SECRET_OR_KEY
}