const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// get current user
router.get('/me', auth, async (req, res) => {
  try {
    const u = await User.findById(req.user.id).select('-password');
    res.json(u);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// list users (admin)
router.get('/', auth, async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
