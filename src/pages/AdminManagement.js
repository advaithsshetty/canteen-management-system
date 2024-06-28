import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const initialOrders = [
  { id: 1, item: 'Pasta', date: '2024-06-01', status: 'Delivered', special: true },
  { id: 2, item: 'Burger', date: '2024-06-02', status: 'Preparing', special: false },
  // Add more orders as needed
];

const initialMenuItems = [
  { id: 1, name: 'Pasta', category: 'Lunch', description: 'Delicious pasta with tomato sauce', price: 100, image: '/images/pasta.jpg', popular: true },
  { id: 2, name: 'Burger', category: 'Snacks', description: 'Juicy burger with cheese', price: 80, image: '/images/burger.jpg', popular: false },
  // Add more menu items as needed
];

const AdminOrderManagement = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState({ id: '', name: '', category: '', description: '', price: '', image: '', popular: false });
  const [activeSection, setActiveSection] = useState('orders'); // 'orders' or 'menu'

  const handleShowModal = (item) => {
    setModalItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalItem({ id: '', name: '', category: '', description: '', price: '', image: '', popular: false });
  };

  const handleSaveItem = () => {
    if (modalItem.id) {
      // Update existing item
      setMenuItems(menuItems.map(item => item.id === modalItem.id ? modalItem : item));
    } else {
      // Add new item
      setMenuItems([...menuItems, { ...modalItem, id: menuItems.length + 1 }]);
    }
    handleCloseModal();
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const toggleSection = (section) => {
    setActiveSection(section);
  };

  return (
    <Container>
      <ToggleButtonGroup type="radio" name="sectionToggle" className="mb-3">
        <ToggleButton
          variant="light"
          value="orders"
          onClick={() => toggleSection('orders')}
          active={activeSection === 'orders'}
          style={{ padding: '10px', backgroundColor: '#f8f9fa', color: '#495057', border: '1px solid #ced4da' }}
        >
          Order Management
        </ToggleButton>
        <ToggleButton
          variant="light"
          value="menu"
          onClick={() => toggleSection('menu')}
          active={activeSection === 'menu'}
          style={{ padding: '10px', backgroundColor: '#f8f9fa', color: '#495057', border: '1px solid #ced4da' }}
        >
          Menu Management
        </ToggleButton>
      </ToggleButtonGroup>

      <Row className="mb-3">
        <Col>
          {activeSection === 'menu' && (
            <Button variant="primary" onClick={() => handleShowModal({ id: '', name: '', category: '', description: '', price: '', image: '', popular: false })}>
              Add Menu Item
            </Button>
          )}
          {activeSection === 'orders' && (
            <p className="text-muted">You are in Order Management mode.</p>
          )}
          {activeSection === 'menu' && (
            <p className="text-muted">You are in Menu Management mode.</p>
          )}
        </Col>
      </Row>

      {activeSection === 'orders' && (
        <>
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
        </>
      )}

      {activeSection === 'menu' && (
        <>
          <Row>
            {menuItems.map(item => (
              <Col key={item.id} sm="6">
                <Card className="mb-3">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>Category: {item.category}</Card.Text>
                    <Card.Text>Description: {item.description}</Card.Text>
                    <Card.Text>Price: ₹{item.price}</Card.Text>
                    {item.popular && <Card.Text className="text-success">Popular</Card.Text>}
                    <Button variant="secondary" onClick={() => handleShowModal(item)}>Edit</Button>
                    <Button variant="danger" className="ml-2" onClick={() => handleDeleteItem(item.id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalItem.id ? 'Edit Menu Item' : 'Add Menu Item'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formItemName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={modalItem.name} onChange={(e) => setModalItem({ ...modalItem, name: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formItemCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" value={modalItem.category} onChange={(e) => setModalItem({ ...modalItem, category: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formItemDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" value={modalItem.description} onChange={(e) => setModalItem({ ...modalItem, description: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formItemPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" value={modalItem.price} onChange={(e) => setModalItem({ ...modalItem, price: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formItemImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" value={modalItem.image} onChange={(e) => setModalItem({ ...modalItem, image: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formItemPopular">
              <Form.Check type="checkbox" label="Popular" checked={modalItem.popular} onChange={(e) => setModalItem({ ...modalItem, popular: e.target.checked })} />
            </Form.Group>
            <Button variant="primary" onClick={handleSaveItem}>
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminOrderManagement;
