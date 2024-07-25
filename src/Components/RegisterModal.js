// src/Components/RegisterModal.js
import React, { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { registerUser } from '../services';

const RegisterModal = ({ show, handleClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      await registerUser({ name, email, password });
      setSuccess('Registration successful! You can now log in.');
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: '#3a3a3a', color: 'white', borderRadius: '10px 10px 0 0' }}>
        <Modal.Title style={{ fontWeight: 'bold' }}>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ padding: '20px' }}>
        {error && <Alert variant="danger">{error}</Alert>}
        {success && <Alert variant="success">{success}</Alert>}
        <Form onSubmit={handleRegister}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ border: '1px solid #ced4da', borderRadius: '5px' }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ border: '1px solid #ced4da', borderRadius: '5px' }}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ border: '1px solid #ced4da', borderRadius: '5px' }}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            style={{ backgroundColor: '#28a745', border: 'none', width: '100%', margin: '10px 0 10px 0' }}
          >
            Register
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
