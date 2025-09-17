import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blogs from './Blogs';
import Review from './Review';
import Contact from './Contact';
import AdminLogin from './Admin/AdminLogin';
import AdminDashboard from './Admin/AdminDashboard';
import AddBlog from './Admin/AddBlog';
import ViewBlog from './Admin/ViewBlog';
import EditBlog from './Admin/EditBlog';

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/review" element={<Review />} />
     <Route path="/contact" element={<Contact/>} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />}>
        <Route path="addblog" element={<AddBlog />} />
        <Route path="viewblog" element={<ViewBlog />} />
      </Route>

      <Route path="/editblog/:id" element={<EditBlog />} />
    </Routes>
  );
};

export default Routing;