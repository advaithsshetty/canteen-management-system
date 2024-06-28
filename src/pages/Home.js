// src/pages/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
  <Container className="mt-5">
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Welcome to CMS</h1>
        <p className="col-md-8 fs-4">Order your favorite meals quickly and easily.</p>
      </div>
    </div>
    <Row>
      <Col>
        <h2>About Us</h2>
        <p>We serve the best food on campus!</p>
      </Col>
    </Row>
  </Container>
);

export default Home;
