import React, { useState } from 'react';
import { addBlog } from '../../api';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');
  const [category,setCategory]=useState('');
  const [file,setFile]=useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const fd = new FormData();
      fd.append('title', title);
      fd.append('content', content);
      fd.append('category', category);
      if(file) fd.append('image', file);
      await addBlog(fd);
      alert('Blog created');
      navigate('/admin/listblog');
    }catch(err){
      alert(err.response?.data?.msg || 'Create failed');
    }
  };

  return (
    <div className="add-blog">
      <h2>Add Blog</h2>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" required />
        <input value={category} onChange={e=>setCategory(e.target.value)} placeholder="Category" />
        <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Content" rows={8} required />
        <input type="file" onChange={e=>setFile(e.target.files[0])} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddBlog;
