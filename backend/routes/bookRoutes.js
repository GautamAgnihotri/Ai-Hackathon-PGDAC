const express = require('express');
const router = express.Router();
const pool = require('../db/db');
const result = require('../utils/result');

router.post('/', async (req, res) => {
    // Add new book
    console.log("request hit for add book");
    const sql = `INSERT INTO books (name, author, subject, price, isbn) VALUES (?,?,?,?,?)`;
    pool.query(sql, [req.body.name, req.body.author, req.body.subject, req.body.price, req.body.isbn], (err, data)=>{
        if(data.affectedRows > 0){
            console.log("Book added successfully");
        }else{
            console.log("Failed to add book");
        }
        res.send(result.createResult(err,data));
    })
});

router.get('/', async (req, res) => {
  // Get all books
  const sql = `SELECT * FROM books`;
    pool.query(sql, (err, data)=>{
        res.send(result.createResult(err, data));
    })

});

router.get('/:id', async (req, res) => {
  // TODO: Get book details
});

router.put('/:id', async (req, res) => {
  // TODO: Update book information
});

router.delete('/:id', async (req, res) => {
  // TODO: Remove book
});

router.put('/:id/rack', async (req, res) => {
  // TODO: Organize books in racks
});

module.exports = router;
