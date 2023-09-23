const express = require("express");
const mariadb = require("mariadb/callback");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const pool = mariadb.createConnection ({
    user: "admin",
    host: "localhost",
    password: "12345678",
    database: "sice3"
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    pool.query("SELECT username,password FROM usuarios WHERE username = ? AND password = ?", [username, password], 
        (err, result) => {
            
            if(err){
                req.setEncoding({err: err});
            }else{
                if(result.length > 0){
                    res.send(result);
                }else{
                    res.send({message: "DATOS EQUIVOCADOS!"})
                }
            }
        }
    )
})

app.listen(3001, () => {
    console.log("running backend server");
})
