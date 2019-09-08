import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HomePage extends React.Component {
    render(){
        return (
            <div className = "homePage">
               <Container>
                    <Row>
                        <Col>
                            HomePage is here
                        </Col>
                    </Row>
               </Container>
            </div>
        )
    }
}

export default HomePage;