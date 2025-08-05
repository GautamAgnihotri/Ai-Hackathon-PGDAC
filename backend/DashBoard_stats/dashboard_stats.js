// routes/dashboard.js
const express = require('express');
const db = require('../db/db.js');
const router = express.Router();

router.get('/stats', async (req, res) => {
  try {
    const [results] = await db.query(`
      SELECT 
        (SELECT COUNT(*) FROM BOOKS) AS totalBooks,
        (SELECT COUNT(*) FROM ISSUERECORD WHERE returned IS NULL) AS issuedBooks,
        (SELECT COUNT(*) FROM ISSUERECORD 
         WHERE returned IS NULL 
         AND returndue BETWEEN NOW() AND DATE_ADD(NOW(), INTERVAL 7 DAY)) AS dueThisWeek,
        (SELECT COUNT(*) FROM COPIES WHERE status = 'available') AS availableCopies,
        (SELECT COUNT(*) FROM ISSUERECORD 
         WHERE returned IS NULL 
         AND returndue < NOW()) AS overdueBooks,
        (SELECT COUNT(*) FROM MEMBERS) AS totalMembers,  // Changed from activeMembers
        (SELECT COALESCE(SUM(amount), 0) FROM PAYMENTS 
         WHERE DATE(txtime) = CURDATE()) AS todaysCollections
    `);
    
    const stats = {
      totalBooks: results[0].totalBooks,
      issuedBooks: results[0].issuedBooks,
      dueThisWeek: results[0].dueThisWeek,
      availableCopies: results[0].availableCopies,
      overdueBooks: results[0].overdueBooks,
      totalMembers: results[0].totalMembers,  // Now shows all members
      todaysCollections: results[0].todaysCollections
    };
    
    res.json(stats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ 
      error: 'Failed to fetch dashboard stats',
      details: err.message 
    });
  }
});

module.exports = router;