const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

exports.addClient = (req, res) => {
    const { nome, cpf, email, telefone, endereco, status } = req.body;

    const query = 'INSERT INTO clients (nome, cpf, email, telefone, endereco, status) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [nome, cpf, email, telefone, endereco, status], (err, result) => {
        if (err) throw err;
        res.send('Cliente adicionado com sucesso!');
    });
};
