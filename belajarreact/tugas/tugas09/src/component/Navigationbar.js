import React from 'react';
import {Navbar,
        Nav,
        Form,
        Button,
        NavDropdown
} from 'react-bootstrap';

const Navigationbar =()=> {
    return (
        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Akses Sport</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Berita</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Live Scores</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Piala</NavDropdown.Item>
                        <NavDropdown.Item href="/">Liga</NavDropdown.Item>
                    </NavDropdown>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Transfer Pemain</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/">Tim</Nav.Link>
                </Nav.Item>
            </Nav>
            <Nav>
                <Form inline>
                    <Form.Control type="text" placeholder="search" className="mr-sm-2" />
                    <Button variant="outline-secondary">Search</Button>
                </Form>
            </Nav>
        </Navbar>
    )
}

export default Navigationbar