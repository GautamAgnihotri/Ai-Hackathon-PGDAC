const express = require('express');
const router = express.Router();
const pool = require('../db/db');
const result = require('../utils/result');

router.post('/', async (req, res) => {
  // Add book copy
  const bookid = req.body.bookid;
  const rack = req.body.rack;
  const status = req.body.status;
  if(bookid == null){
    res.send(result.createErrorResult("Book ID is required"));
  }
  if(rack == null){
    res.send(result.createErrorResult("Rack is required"));
  }
  if(status == null){
    res.send(result.createErrorResult("Status is required"));
  }
  const checkBookIdSQL = `SELECT COUNT(*) FROM books WHERE id = ?`; 
  pool.query(checkBookIdSQL, [bookid], (err, data)=>{
    if(data[0]['COUNT(*)'] == 0){
      res.send(result.createErrorResult("Book ID does not exist"));
    }else{
        const sql = `INSERT INTO copies (bookid, rack, status) VALUES (?,?,?)`;
        pool.query(sql, [req.body.bookid, req.body.rack, req.body.status], (err, data)=>{
        res.send(result.createResult(err, data));
    })
    }
  })
  
});

router.get('/', async (req, res) => {
  // Get all book copies
  const sql = `SELECT * FROM copies`;
  pool.query(sql, (err,data)=>{
    res.send(result.createResult(err,data));
  })
});

router.put('updateCopyStatus/:id', async (req, res) => {
  // Update book copy status
  const sql = `UPDATE copies SET status = ? WHERE id = ?`;
  pool.query(sql, [req.body.status, req.params.id], (err,data)=>{
    res.send(result.createResult(err,data));
  })
});

router.put('updateCopyRack/:id', async (req,res)=>{
    // update book copy rack
    const sql = `UPDATE copies SET rack = ? WHERE id = ?`;
    if(req.body.rack == null){
        res.send(result.createErrorResult("Rack is required"));
    }
    if(req.params.id == null){
        res.send(result.createErrorResult("Copy ID is required"));
    }

    pool.query(sql, [req.body.rack, req.params.id],(err,data)=>{
        res.send(result.createResult(err,data));
    })
})

router.delete('/:id', async (req, res) => {
  // Remove book copy
  const sql = `DELETE FROM copies WHERE id = ?`;
  pool.query(sql,[req.params.id], (err, data)=>{
    res.send(result.createResult(err, data));
  })
});

module.exports = router;
