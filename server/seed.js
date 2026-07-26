require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');
const Blog = require('./src/models/Blog');
const bcrypt = require('bcrypt');

(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB connected for seeding');

    await User.deleteMany();
    await Blog.deleteMany();

    const password = await bcrypt.hash('123456', 10);

    const user = await User.create({
      name: 'Demo User',
      email: 'demo@example.com',
      password
    });

    const admin = await User.create({
      name: 'Admin',
      email: 'admin@example.com',
      password,
      role: 'admin'
    });

    await Blog.create([
      { title:'First Blog', content:'This is a sample blog post.', author: user._id },
      { title:'Second Blog', content:'Another example blog post.', author: admin._id }
    ]);

    console.log('Seed Completed');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
