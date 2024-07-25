// src/pages/Feedback.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import '../css/Feedback.css';

const Feedback = () => {
  const [menuItemId, setMenuItemId] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Retrieve the token from local storage or context
  const token = localStorage.getItem('token'); // Adjust based on where you store the token

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:1075/api/feedback/submit', {
        menuItemId,
        rating,
        comment
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setMessage('Feedback submitted successfully!');
      setMenuItemId('');
      setRating('');
      setComment('');
    } catch (err) {
      setError('Failed to submit feedback. Please try again.');
    }
  };

  return (
    <Container className="feedback-container my-5">
      <Row className="justify-content-md-center">
        <Col xs={12} md={8} lg={6}>
          <h2 className="text-center mb-4">Feedback</h2>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formMenuItem">
              <Form.Label>Menu Item</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter menu item ID"
                value={menuItemId}
                onChange={(e) => setMenuItemId(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formRating">
              <Form.Label>Rating (1-5)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                max="5"
                placeholder="Enter rating"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formComment">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" className="mt-3">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Feedback;
