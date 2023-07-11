const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')

dotenv.config({ path: './.env'});
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
})

db.connect((error) => {
  if(error) {
      console.log(error)
  } else {
      console.log("MySQL connected!")
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});