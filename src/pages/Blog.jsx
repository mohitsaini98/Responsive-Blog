import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../api';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs,setBlogs]=useState([]);

  useEffect(()=>{
    fetchBlogs().then(res=>setBlogs(res.data)).catch(()=>{});
  },[]);

  return (
    <div className="blog-list-page">
      <h1>Blogs</h1>
      <div className="blogs">
        {blogs.map(b=>(
          <div key={b._id} className="blog-card">
            {b.image && <img src={b.image} alt={b.title} style={{maxWidth:200}} />}
            <h3>{b.title}</h3>
            <p>{b.content?.slice(0,150)}...</p>
            <p>By: {b.author?.name}</p>
            <Link to={`/blog/${b._id}`}>Read more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
