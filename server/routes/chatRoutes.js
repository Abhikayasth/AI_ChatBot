const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

router.post('/chat', async (req, res) => {
  const { users, messages } = req.body;
  const chat = new Chat({ users, messages });
  try {
    const savedChat = await chat.save();
    res.json(savedChat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
