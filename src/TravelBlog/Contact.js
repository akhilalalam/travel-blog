import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Contact Us</h2>
      {submitted && (
        <div className="alert alert-success" role="alert">
          Thank you! Your message has been sent.
        </div>
      )}
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Your Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary mb-3">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
