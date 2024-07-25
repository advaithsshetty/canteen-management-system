import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const RegisterModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton style={{ backgroundColor: '#3a3a3a', color: 'white', borderRadius: '10px 10px 0 0' }}>
      <Modal.Title style={{ fontWeight: 'bold' }}>Register</Modal.Title>
    </Modal.Header>
    <Modal.Body style={{ padding: '20px' }}>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" style={{ border: '1px solid #ced4da', borderRadius: '5px' }} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" style={{ border: '1px solid #ced4da', borderRadius: '5px' }} />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" style={{ border: '1px solid #ced4da', borderRadius: '5px' }} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ backgroundColor: '#28a745', border: 'none', width: '100%', margin:'10px 0 10px 0' }}>
          Register
        </Button>
      </Form>
    </Modal.Body>
  </Modal>
);

export default RegisterModal;
