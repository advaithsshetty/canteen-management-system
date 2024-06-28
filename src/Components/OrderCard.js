// src/components/OrderCard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const OrderCard = ({ order }) => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>Order #{order.id}</Card.Title>
      <Card.Text>
        <strong>Item:</strong> {order.item}
      </Card.Text>
      <Card.Text>
        <strong>Date:</strong> {order.date}
      </Card.Text>
      <Card.Text>
        <strong>Status:</strong> {order.status}
      </Card.Text>
      <Button variant="primary">View Details</Button>
    </Card.Body>
  </Card>
);

export default OrderCard;
