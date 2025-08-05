const express = require("express");
const db = require("../db/db.js");
const router = express.Router();
// Add new member (name, email, password, phone, role defaults to 'member')
router.post("/", (req, res) => {
  const { name, email, phone } = req.body;

  const sql = `
    INSERT INTO members (name, email, phone, role)
    VALUES (?, ?, ?, 'member')
  `;

  db.query(sql, [name, email, phone], (err, result) => {
    if (err) {
      console.error("Error adding member:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({
      message: "Member added successfully",
      memberId: result.insertId
    });
    console.log("Entity added..")
  });
});

module.exports = router;
