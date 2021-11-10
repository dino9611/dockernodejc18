const express = require("express");
require("dotenv").config();
const app = express();
const mysql = require("mysql2");

// const conn = mysql.createConnection({
//   host: "host.docker.internal",
//   port: 3306,
//   user: "dino9611",
//   password: "password",
//   database: "",
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
      "welcome docker nodejs",
  });
});

app.listen(5000, () => console.log("app jalan di 5000 "));
