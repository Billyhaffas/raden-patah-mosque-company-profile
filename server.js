const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

// Koneksi ke database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "haffasb123",
    database: "raden_patah_mosque"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Database Connected!");
});

app.listen(3006, () => {
    console.log("Server running on port 3006");
});

// // Endpoint untuk menerima data dari HTML
app.post("/register", (req, res) => {
    const { name, email } = req.body;

    const sql = "INSERT INTO users (name, email) VALUES (?, ?)";

    db.query(sql, [name, email], (err, result) => {
        if (err) {
            res.status(500).json({ message: "Gagal simpan data" });
        } else {
            res.json({ message: "Data berhasil disimpan!" });
        }
    });
});