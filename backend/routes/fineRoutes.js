const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // TODO: Collect fines
});

router.get('/errors', async (req, res) => {
  // TODO: Generate error messages
});

module.exports = router;
