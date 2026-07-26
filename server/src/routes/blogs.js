const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Blog = require('../models/Blog');
const upload = require('../config/multer');

// create blog (auth + image)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const image = req.file ? '/uploads/' + req.file.filename : null;
    const blog = new Blog({
      title, content, category, image, author: req.user.id
    });
    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// list blogs (with basic pagination)
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    const blogs = await Blog.find().sort({ publishedAt: -1 }).skip(skip).limit(limit).populate('author','name email');
    res.json(blogs);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// get single blog
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate('author','name email');
    if(!blog) return res.status(404).json({ msg:'Not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// update blog (owner)
router.put('/:id', auth, upload.single('image'), async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if(!blog) return res.status(404).json({ msg:'Not found' });
    if(blog.author.toString() !== req.user.id) return res.status(403).json({ msg:'Unauthorized' });

    const { title, content, category } = req.body;
    if(req.file) blog.image = '/uploads/' + req.file.filename;
    if(title) blog.title = title;
    if(content) blog.content = content;
    if(category) blog.category = category;
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// delete blog
router.delete('/:id', auth, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if(!blog) return res.status(404).json({ msg:'Not found' });
    if(blog.author.toString() !== req.user.id) return res.status(403).json({ msg:'Unauthorized' });
    await blog.remove();
    res.json({ msg:'Deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
