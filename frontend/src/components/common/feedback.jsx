import React, { useState } from 'react';
import axios from 'axios';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/feedback', {
        feedback,
        email
      });
      setMessage(response.data.message);
      setFeedback('');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="feedback-form">
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email (optional):</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Feedback;
