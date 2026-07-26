const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String,
  category: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  publishedAt: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Blog', BlogSchema);
