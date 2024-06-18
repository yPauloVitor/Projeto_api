require('dotenv').config()
module.exports = {
  "development": {
    "username": process.env.BANCO_USER,
    "password": process.env.BANCO_PASSWORD,
    "database": process.env.BANCO,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.BANCO_USER,
    "password": process.env.BANCO_PASSWORD,
    "database": process.env.BANCO,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.BANCO_USER,
    "password": process.env.BANCO_PASSWORD,
    "database": process.env.BANCO,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
