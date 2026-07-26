const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/Product');
const upload = require('../config/multer');

// create product with optional image upload
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { title, description, price, inStock } = req.body;
    const image = req.file ? '/uploads/' + req.file.filename : null;

    const product = new Product({
      title,
      description,
      price,
      image,
      inStock,
      owner: req.user.id
    });

    await product.save();
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// list products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().populate('owner', 'name email');
    res.json(products);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// get product
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id).populate('owner','name email');
    if (!p) return res.status(404).json({ msg: 'Not found' });
    res.json(p);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// update product
router.put('/:id', auth, async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ msg: 'Not found' });
    if (p.owner.toString() !== req.user.id) return res.status(403).json({ msg:'Unauthorized' });

    Object.assign(p, req.body);
    await p.save();
    res.json(p);
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// delete product
router.delete('/:id', auth, async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ msg: 'Not found' });
    if (p.owner.toString() !== req.user.id) return res.status(403).json({ msg:'Unauthorized' });

    await p.remove();
    res.json({ msg:'Deleted' });
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
