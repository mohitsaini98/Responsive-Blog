import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card">
      {blog.image && <img src={blog.image} alt={blog.title} style={{maxWidth:300}} />}
      <h3>{blog.title}</h3>
      <p>{blog.content?.slice(0,200)}...</p>
      <p>By: {blog.author?.name}</p>
      <Link to={`/blog/${blog._id}`}>Read more</Link>
    </div>
  );
};

export default BlogCard;
