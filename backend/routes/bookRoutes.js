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
  // Get book details
  const sql = `SELECT * FROM books WHERE id = ?`;
    pool.query(sql, [req.params.id], (err, data)=>{
        res.send(result.createResult(err, data));
    })
});

router.put('/:id', async (req, res) => {
  // Update book information
  const sql = `UPDATE books SET name = ?, author = ?, subject = ?, price = ?, isbn = ? WHERE id =?`;
  pool.query(sql, [req.body.name,req.body.author,req.body.subject, req.body.price, req.body.isbn, req.params.id
], (err, data)=>{
    if(data.affectedRows > 0){
        console.log("Book updated successfully");
    }else{
        console.log("Failed to update book");
    }

    res.send(result.createResult(err, data));
});
});
router.delete('/:id', async (req, res) => {
  // TODO: Remove book
  const sql = `DELETE FROM books WHERE id = ?`;
  pool.query(sql,[req.params.id], (err, data)=>{
    res.send(result.createResult(err, data));
  })
});

router.put('/:id/rack', async (req, res) => {
  // Organize books in racks
  const sql = `UPDATE books SET rack = ? WHERE id = ?`;
  pool.query(sql, [req.body.rack, req.params.id], (err, data)=>{
    res.send(result.createResult(err, data));
  })

});

module.exports = router;
