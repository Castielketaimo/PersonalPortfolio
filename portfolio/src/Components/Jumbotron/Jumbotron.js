import React from 'react';
import {Jumbotron as Jumbo} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import BackgoundImg from '../../Asset/HomePage.jpg'

const Styles =  styled.div`
    .jumbo {
        background: url(${BackgoundImg}) no-repeat fixed bottom;
        background-size: cover
        color: #ccc;
        height 250px;
        position: relative;
        z-index: -2;
    }

    .overlay {
        background-color: #000;
        opacity: 0.3; 
        position: absolute;
        top: 0;
        left:0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }
`;

export const Jumbotron = () => (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Oh Hey</h1>
                <h2>Castiel Here</h2>
            </Container>
        </Jumbo>
    </Styles>
)