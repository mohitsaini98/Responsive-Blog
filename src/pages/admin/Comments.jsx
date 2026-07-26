import React, { useEffect, useState } from 'react';
import { fetchComments, deleteComment } from '../../api';

const Comments = ({ blogId }) => {
  const [comments,setComments]=useState([]);

  useEffect(()=>{
    if(blogId){
      fetchComments(blogId).then(res=>setComments(res.data)).catch(()=>{});
    }
  },[blogId]);

  const handleDelete = async (id)=>{
    if(!window.confirm('Delete comment?')) return;
    try{
      await deleteComment(id);
      setComments(prev=>prev.filter(c=>c._id !== id));
    }catch(err){ alert('Delete failed');}
  };

  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {comments.map(c=>(
          <li key={c._id}>
            <b>{c.author?.name}</b>: {c.text}
            <button onClick={()=>handleDelete(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
