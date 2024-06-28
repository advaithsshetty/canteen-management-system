// src/pages/OrderHistory.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const orders = [
  { id: 1, item: 'Pasta', date: '2024-06-01', status: 'Delivered' },
  { id: 2, item: 'Burger', date: '2024-06-02', status: 'Preparing' },
  // Add more orders as needed
];

const OrderHistory = () => (
  <Container>
    <h2>Order History</h2>
    <Row>
      {orders.map(order => (
        <Col key={order.id} sm="6">
          <Card>
            <Card.Body>
              <Card.Title>{order.item}</Card.Title>
              <Card.Text>Date: {order.date}</Card.Text>
              <Card.Text>Status: {order.status}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default OrderHistory;
