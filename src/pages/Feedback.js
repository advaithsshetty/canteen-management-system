// src/pages/Feedback.js
import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Feedback = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col md="6">
        <h2>Feedback</h2>
        <Form>
          <Form.Group controlId="formFeedback">
            <Form.Label>Feedback</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter your feedback" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
);

export default Feedback;
