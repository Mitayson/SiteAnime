import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const salt = 10; 

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "siteanime"
});

app.post('/register', (req, res) => {
    const sql = "INSERT INTO cadastros (nome, email, senha) VALUES (?)";
    bcrypt.hash(req.body.senha.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Error hashing password" }); 
        const values = [
            req.body.nome, 
            req.body.email,
            hash
        ]
        db.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Error inserting data into the server" });
            return res.json({ Status: "Success" });
        });
    });
});

app.post('/login', (req, res) => {
    const sql = 'SELECT * FROM cadastros WHERE email = ?';
    db.query(sql, [req.body.email], (err, data) => {
        if (err) return res.json({ Error: "Login error in server" });
        if(data.length > 0){
            bcrypt.compare(req.body.senha.toString(), data[0].senha, (err, response) => {
                if(err) return res.json({ Error: "Password compare error" });
                if(response){
                    return res.json({Status: "Success"});
                }else{
                    return res.json({Error: "Password not matched"});
                }
            })
        }else {
            return res.json({ Error: "No email existed"});
        }
    })
})
app.listen(8080, () => {
    console.log("Running...");
});
