import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = () => {
  const [form, setForm] = useState({
    title: '',
    category: '',
    author: '',
    image: '',
    date: '',
    content: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting blog:", form);

    axios.post('http://localhost:5000/Blogs', form)
      .then(() => {
        alert('Blog added successfully!');
        setForm({
          title: '',
          category: '',
          author: '',
          image: '',
          date: '',
          content: ''
        });
      })
      .catch((err) => {
        console.error("Add blog error:", err);
        alert('Error adding blog');
      });
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input type="text" className="form-control" name="title" value={form.title} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Category</label>
          <input type="text" className="form-control" name="category" value={form.category} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Author</label>
          <input type="text" className="form-control" name="author" value={form.author} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Image URL</label>
          <input type="text" className="form-control" name="image" value={form.image} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Date</label>
          <input type="date" className="form-control" name="date" value={form.date} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Content</label>
          <textarea className="form-control" name="content" value={form.content} onChange={handleChange} required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;