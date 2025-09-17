import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get('http://localhost:5000/Blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      axios.delete(`http://localhost:5000/AddBlog/${id}`)
        .then(() => fetchBlogs())
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container my-5">
      <h3 className="mb-4 text-center text-success">All Blogs</h3>
      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.length > 0 ? (
            blogs.map((blog, index) => (
              <tr key={blog.id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={{ width: '100px', height: '60px', objectFit: 'cover' }}
                  />
                </td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Link to={`/admin/editblog/${blog.id}`} className="btn btn-primary btn-sm me-2">Edit</Link>
                  <button onClick={() => handleDelete(blog.id)} className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No blogs found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBlog;
