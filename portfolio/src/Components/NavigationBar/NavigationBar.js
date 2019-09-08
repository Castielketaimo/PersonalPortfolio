import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

const Styles =  styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link{
        color:#bbb;

        &:hover {
            color:white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand='lg'>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle area-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/About">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Contact">Contact</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Work">Work</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)