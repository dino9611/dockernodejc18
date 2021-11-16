const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql2");

// const conn = mysql.createConnection({
//   host: process.env.HOST || "localhost",
//   port: process.env.PORT || 3306,
//   user: process.env.USER ||"dino9611",
//   password: process.env.PASS ||"password",
//   database: process.env.DB|| 'bejc18',
// });


// conn.connect((err)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('connect thread id '+ conn.threadId )
// })

app.get("/", (req, res) => {
  res.status(200).send({
    message:
      "welcome docker lagi nodejs dari github actions dino"+process.env.SERVER,
  });
});

app.get("/user", async (req, res) => {

  const [userdata] = await conn.promise().query('select * from user')
  res.status(200).send(userdata);
});

app.listen(5000, () => console.log("app jalan di 5000 "));
