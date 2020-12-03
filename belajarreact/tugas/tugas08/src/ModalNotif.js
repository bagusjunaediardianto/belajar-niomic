import React, { useState } from 'react'
import {Form,
        Button,
        Modal} from 'react-bootstrap'

const ModalNotif = ()=> {
        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        return (
          <>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="Masukkan email"/>
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="masukkan password"/>
              </Form.Group>
              <Form.Group>
                <Form.Check type="checkbox" label="Term & Condition"/>
              </Form.Group>
              <Button variant="primary" onClick={handleShow}>Login</Button>
            </Form>
      
            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Anda Berhasil Login</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }

export default ModalNotif