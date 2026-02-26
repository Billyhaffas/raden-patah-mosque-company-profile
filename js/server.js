const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rahasia123',
    database: 'raden_patah_mosque'
});

// menyiapkan modul http untuk membuat server
const http = require('http');

// membuat server baru menggunakan fungsi createServer yang ada di http

http.createServer((req, res) => {
    // mengatur header response untuk menunjukkan bahwa konten yang dikirim adalah HTML

    // menulis hello world di server
    res.write("hello world");

    // mengakhiri response
    res.end();
}).listen(3006); // server akan berjalan di port 3006

console.log("Server berjalan di http://localhost:3006");


http.createServer((req, res) => {
    // mengatur header response untuk menunjukkan bahwa konten yang dikirim adalah HTML
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // menulis hello world di server
    res.write("<h1>Hello World</h1>");

    // mengakhiri response
    res.end();
}).listen(3006);
