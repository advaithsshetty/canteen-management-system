import React from 'react';
import { Card, Col, Row, Badge } from 'react-bootstrap';
import '../css/MenuItemCard.css'; // Assuming you have a CSS file for custom styles

const getRatingColor = (rating) => {
  if (rating >= 4.5) {
    return { backgroundColor: '#28a745' }; // Green for good ratings (4.5 and above)
  } else if (rating >= 3.0 && rating < 4.5) {
    return { backgroundColor: '#ffc107' }; // Yellow for average ratings (between 3.0 and 4.49)
  } else {
    return { backgroundColor: '#dc3545' }; // Red for bad ratings (below 3.0)
  }
};

const MenuItemCard = ({ item }) => (
  <Card className="menu-item-card mb-4">
    <div className="position-relative">
      <Card.Img variant="top" src={item.image} className="menu-item-image" />
      <div className="menu-item-rating">
        <Badge style={getRatingColor(item.rating)} className="rating-badge">{item.rating}</Badge>
      </div>
    </div>
    <Card.Body>
      <Row>
        <Col xs={8}>
          <Card.Title className="menu-item-title">{item.name}</Card.Title>
          <Card.Text className="menu-item-category">{item.category}</Card.Text>
        </Col>
        <Col xs={4} className="text-right">
          <Card.Text className="menu-item-price">₹{item.price}</Card.Text>
          <Card.Text className="menu-item-time">{item.time} min</Card.Text>
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

export default MenuItemCard;
