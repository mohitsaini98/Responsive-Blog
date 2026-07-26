import React, { useEffect, useState } from 'react';
import { fetchBlogs } from '../../api';
import { Link } from 'react-router-dom';

const ListBlog = () => {
  const [blogs,setBlogs]=useState([]);

  useEffect(()=>{
    fetchBlogs().then(res=>setBlogs(res.data)).catch(()=>{});
  },[]);

  return (
    <div className="list-blog">
      <h2>All Blogs</h2>
      <Link to="/admin/addblog">Add New</Link>
      <ul>
        {blogs.map(b=>(
          <li key={b._id}>
            <h3>{b.title}</h3>
            <p>By: {b.author?.name}</p>
            <Link to={`/blog/${b._id}`}>View</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListBlog;
