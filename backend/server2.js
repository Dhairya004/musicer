const express = require('express');
const router = express.Router();
const UserData = require('../Models/UserData');

router.post('/register', async (req, res) => {
  try {
    const newUserData = new UserData(req.body);
    await newUserData.save();
    res.status(201).json(newUserData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;