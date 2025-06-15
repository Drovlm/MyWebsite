import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzzevLyncrE7slya2e4HavxbgXx1JInAFCMTUnjMc0p/exec';
      
      const submissionData = new FormData();
      submissionData.append('name', formData.name);
      submissionData.append('email', formData.email);
      submissionData.append('comment', formData.comment);
      
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = `${scriptUrl}?t=${Date.now()}`;
      form.target = iframe.name;
      
      submissionData.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      });
      
      document.body.appendChild(form);
      form.submit();
      
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
        setSubmitStatus('success');
        setFormData({ name: '', email: '', comment: '' });
      }, 2000);
      
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-hub">
      <div className="form-container">
        <p1>Contact me</p1>
        
        {submitStatus === 'success' ? (
          <div className="success-message">
            <p>Thank you for your message! I'll get back to you soon.</p>
            <button 
              className="submit-btn"
              onClick={() => setSubmitStatus(null)}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Your name" 
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="comment">Comment</label>
              <textarea 
                id="comment" 
                name="comment" 
                placeholder="Your message..." 
                rows="5" 
                value={formData.comment}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send'}
            </button>

            {submitStatus === 'error' && (
              <p className="error-message">
                There was an error submitting your message. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className='body'>
      <div className='contacts'>
                <div className='social-links'>
          <h3>Connect Directly</h3>
          <div className="link-card">
            <div>
              <a href="https://github.com/Drovlm">Telegram</a>
            </div>
          </div>
          <div className="link-card">
       
            <div>
              <a href="https://github.com/Drovlm">GitHub</a>
        
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};


export default Contact;