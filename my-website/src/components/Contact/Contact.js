import React, { useState } from 'react';
import './Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    time: '',
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
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxttDtZVaOSmSr_9kC4JiMOMf_qBjLfzVx5GmFkuKbdvMw_KEM-ncFv2ZeUvng8ZYXsFw/exec';

    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.name = 'hidden_iframe_' + Date.now();
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = `${scriptUrl}?t=${Date.now()}`;
    form.target = iframe.name;

    const fields = ['name', 'email', 'comment'];
    fields.forEach((field) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field;
      input.value = formData[field];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    setTimeout(() => {
      form.remove();
      iframe.remove();
      setSubmitStatus('success');
      setFormData({ name: '', email: '', comment: '' });
    }, 1500);

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
      <div className='contacts-container'>
                <div className='social-links'>
          <h3>Connect Directly</h3>
          <div className='links'>
          <a href="https://t.me/Drovlm" className="link-card-t" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://github.com/Drovlm" className="link-card-g"target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        </div>
        <ContactForm />
      </div>
      </div>
    </div>
  );
};

export default Contact;




