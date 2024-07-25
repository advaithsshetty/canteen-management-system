// src/pages/Feedback.js
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/Feedback.css';

const Feedback = () => (
  <Container className="feedback-container my-5">
    <Row className="justify-content-md-center">
      <Col xs={12} md={8} lg={6}>
        <h2 className="text-center mb-4">Feedback</h2>
        <Form>
          <Form.Group controlId="formFeedback">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your feedback" />
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

export default Feedback;
