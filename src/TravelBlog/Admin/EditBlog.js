import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '', category: '', author: '',
    image: '', date: '', content: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/AddBlog/${id}`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/AddBlog/${id}`, blog)
      .then(() => {
        alert("Blog updated successfully!");
        navigate('/admindashboard/viewblog');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container py-5">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={blog.title} onChange={handleChange} className="form-control mb-2" placeholder="Title" />
        <input name="category" value={blog.category} onChange={handleChange} className="form-control mb-2" placeholder="Category" />
        <input name="author" value={blog.author} onChange={handleChange} className="form-control mb-2" placeholder="Author" />
        <input name="image" value={blog.image} onChange={handleChange} className="form-control mb-2" placeholder="Image URL" />
        <input name="date" value={blog.date} onChange={handleChange} className="form-control mb-2" type="date" />
        <textarea name="content" value={blog.content} onChange={handleChange} className="form-control mb-2" placeholder="Content" />
        <button type="submit" className="btn btn-success">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;