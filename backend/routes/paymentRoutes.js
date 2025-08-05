const express = require('express');
const router = express.Router();

router.post('/monthly', async (req, res) => {
  // TODO: Collect monthly payments
});

router.get('/:id', async (req, res) => {
  // TODO: Get payment details
});

module.exports = router;
