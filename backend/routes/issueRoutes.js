const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  // TODO: Issue book to users
});

router.post('/return', async (req, res) => {
  // TODO: Process book returns
});

router.get('/:id/return-date', async (req, res) => {
  // TODO: Check return date
});

router.get('/:id/late-fine', async (req, res) => {
  // TODO: Calculate late return fine
});

module.exports = router;
