import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api'
});

API.interceptors.request.use((req)=>{
  const token = localStorage.getItem('token');
  if(token){
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// auth
export const register = (data)=> API.post('/auth/register', data);
export const login = (data)=> API.post('/auth/login', data);
export const getMe = ()=> API.get('/users/me');

// blogs
export const fetchBlogs = (page=1,limit=20)=> API.get(`/blogs?page=${page}&limit=${limit}`);
export const fetchBlog = (id)=> API.get(`/blogs/${id}`);
export const addBlog = (formData)=> API.post('/blogs', formData, { headers:{ 'Content-Type': 'multipart/form-data' } });
export const updateBlog = (id, formData)=> API.put(`/blogs/${id}`, formData, { headers:{ 'Content-Type': 'multipart/form-data' } });
export const deleteBlog = (id)=> API.delete(`/blogs/${id}`);

// comments
export const fetchComments = (blogId)=> API.get(`/comments/${blogId}`);
export const addComment = (blogId, data)=> API.post(`/comments/${blogId}`, data);
export const deleteComment = (id)=> API.delete(`/comments/${id}`);

export default API;
