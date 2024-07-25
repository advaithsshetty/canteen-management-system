import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getOrderHistory } from '../services';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);

  // Fetch order history from the backend
  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const data = await getOrderHistory();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching order history:', error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <Container>
      <h2>Order History</h2>
      <Row>
        {orders.map(order => (
          <Col key={order._id} sm="6">
            <Card>
              <Card.Body>
                <Card.Title>{order.item}</Card.Title>
                <Card.Text>Date: {new Date(order.date).toLocaleDateString()}</Card.Text>
                <Card.Text>Status: {order.status}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OrderHistory;
