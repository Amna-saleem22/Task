


import { useState } from 'react';
import './Contact.css'; // External CSS file
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';


export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return false;
    }
    if (!email.includes('@')) {
      alert('Invalid email');
      return false;
    }
    alert('Form submitted!');
    return true;
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        <span className="contact-tag">Contact</span>
        <h2>Get in touch</h2>
        <p>
          Have a project in mind or need a responsive, modern website built with clean code?<br />
          I specialize in turning ideas into fully functional, user-friendly interfaces.<br />
          Fill out the form or reach out directly — I'd love to discuss how I can help bring your vision to life.
        </p>






        <div className="contact-info">

          <p><strong>Email :</strong> saleemamna431@gmail.com</p>

        </div>
        <div className="social-icons d-flex justify-content-center gap-3 mt-4">
          <a href="https://www.linkedin.com/in/amna-saleem-it/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="#0077b5" />
          </a>
          <a href="https://github.com/Amna-Saleem22" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="Green" />
          </a>
        </div>
      </div>

      <div className="contact-right">
        <form onSubmit={(e) => { e.preventDefault(); validate(); }}>
          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="e.g., John Smith"
            onChange={handleChange}
          />

          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="e.g., johnsmith@gmail.com"
            onChange={handleChange}
          />

          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="e.g., +44 789 123 456"
            onChange={handleChange}
          />

          <label>Your Message *</label>
          <textarea
            name="message"
            placeholder="Let us know how we can help you..."
            onChange={handleChange}
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </div>
  );
}

