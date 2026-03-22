import React, { useState } from 'react';
import './Booking.css';

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    check_in: '',
    check_out: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' }); // idle, loading, success, error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsApp = () => {
    const defaultNumber = '96100000000'; // Placeholder
    const text = `Hello Colinas Del Sol! I would like to request a booking.%0A%0A*Name*: ${formData.name}%0A*Check-in*: ${formData.check_in}%0A*Check-out*: ${formData.check_out}`;
    window.open(`https://wa.me/${defaultNumber}?text=${text}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: 'loading', message: 'Sending your request...' });

    try {
      // Simulate API call for now; will be connected to Cloudflare Functions
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit booking');
      }

      setStatus({ 
        state: 'success', 
        message: 'Your booking request has been received. You will pay at the property.' 
      });
      setFormData({ name: '', email: '', phone: '', check_in: '', check_out: '' });

    } catch (error) {
      console.error(error);
      setStatus({ 
        state: 'error', 
        message: 'There was an issue submitting your request. Please try WhatsApp instead.' 
      });
    }
  };

  return (
    <section className="booking-section" id="booking">
      <div className="booking-container">
        <div className="booking-header">
          <h2>Reserve Your Stay</h2>
          <p className="subtitle">Request a chalet</p>
          <p className="booking-note">No credit card required. Pay at the property upon arrival.</p>
        </div>

        <div className="booking-form-wrapper">
          {status.state === 'success' ? (
            <div className="status-message success">
              <h3>🎉 Success!</h3>
              <p>{status.message}</p>
              <button className="btn-secondary mt-4" onClick={() => setStatus({ state: 'idle', message: '' })}>Book Another</button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="check_in">Check-in Date *</label>
                  <input type="date" id="check_in" name="check_in" required value={formData.check_in} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="check_out">Check-out Date *</label>
                  <input type="date" id="check_out" name="check_out" required value={formData.check_out} onChange={handleInputChange} min={formData.check_in} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" required placeholder="John Doe" value={formData.name} onChange={handleInputChange} />
              </div>

              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required placeholder="john@example.com" value={formData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" required placeholder="+961 70 123 456" value={formData.phone} onChange={handleInputChange} />
                </div>
              </div>

              {status.state === 'error' && <p className="status-message error">{status.message}</p>}

              <div className="booking-actions">
                <button type="submit" className="btn-primary" disabled={status.state === 'loading'}>
                  {status.state === 'loading' ? 'Requesting...' : 'Request Booking'}
                </button>
                <span className="or-divider">OR</span>
                <button type="button" className="btn-whatsapp" onClick={handleWhatsApp}>
                  Book via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Booking;
