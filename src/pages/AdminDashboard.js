// src/pages/AdminDashboard.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const AdminDashboard = () => (
  <Container>
    <h2>Admin Dashboard</h2>
    <Row>
      <Col sm="4">
        <Card>
          <Card.Link href="/admin/order-management">
          <Card.Body>
            <Card.Title>Management</Card.Title>
            <Card.Text>Update and manage items</Card.Text>
          </Card.Body>
          </Card.Link>
        </Card>
      </Col>
      <Col sm="4">
        <Card>
          <Card.Link href="/admin/sales-reports">
          <Card.Body>
            <Card.Title>Sales Reports</Card.Title>
            <Card.Text>Generate and analyze sales reports</Card.Text>
          </Card.Body>
          </Card.Link>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AdminDashboard;
