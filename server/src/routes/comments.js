const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');

// add comment
router.post('/:blogId', auth, async (req, res) => {
  try {
    const { text } = req.body;
    if(!text) return res.status(400).json({ msg:'Text required' });
    const comment = await Comment.create({ blog: req.params.blogId, author: req.user.id, text });
    res.json(comment);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// get comments for blog
router.get('/:blogId', async (req, res) => {
  try {
    const comments = await Comment.find({ blog: req.params.blogId }).populate('author','name');
    res.json(comments);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// delete comment (author)
router.delete('/:id', auth, async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if(!comment) return res.status(404).json({ msg:'Not found' });
    if(comment.author.toString() !== req.user.id) return res.status(403).json({ msg:'Unauthorized' });
    await comment.remove();
    res.json({ msg:'Deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
