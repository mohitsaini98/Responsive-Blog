import React, { useEffect, useState } from 'react';
import { fetchBlog, fetchComments, addComment } from '../api';
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
  const { id } = useParams();
  const [blog,setBlog]=useState(null);
  const [comments,setComments]=useState([]);
  const [text,setText]=useState('');

  useEffect(()=>{
    fetchBlog(id).then(res=>setBlog(res.data)).catch(()=>{});
    fetchComments(id).then(res=>setComments(res.data)).catch(()=>{});
  },[id]);

  const handleComment = async (e) => {
    e.preventDefault();
    try{
      await addComment(id, { text });
      const res = await fetchComments(id);
      setComments(res.data);
      setText('');
    }catch(err){
      alert('Comment failed');
    }
  };

  if(!blog) return <div>Loading...</div>;

  return (
    <div className="single-blog">
      <h1>{blog.title}</h1>
      {blog.image && <img src={blog.image} alt={blog.title} style={{maxWidth:400}} />}
      <p>{blog.content}</p>
      <p>By: {blog.author?.name}</p>

      <section>
        <h3>Comments</h3>
        <ul>
          {comments.map(c=>(
            <li key={c._id}><b>{c.author?.name}</b>: {c.text}</li>
          ))}
        </ul>

        <form onSubmit={handleComment}>
          <textarea value={text} onChange={e=>setText(e.target.value)} required />
          <button type="submit">Add Comment</button>
        </form>
      </section>
    </div>
  );
};

export default SingleBlog;
