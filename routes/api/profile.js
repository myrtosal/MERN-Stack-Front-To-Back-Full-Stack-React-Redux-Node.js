const express = require('express');
const auth = require('../../middleware/auth');
const router = express.Router();

const Profile = require('../../models/Profile');

// @route   GET api/profile/me
// @desc    Get current user's profile
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
