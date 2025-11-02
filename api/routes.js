const express = require('express');
const os = require('os');
const router = express.Router();

// Basic route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from DevOps Backend 🚀' });
});

// POST route
router.post('/echo', (req, res) => {
  res.json({ received: req.body, status: 'Success ✅' });
});

// System info route
router.get('/system', (req, res) => {
  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: os.uptime(),
  });
});

module.exports = router;
