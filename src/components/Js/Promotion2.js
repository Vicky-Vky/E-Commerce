import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import promotion2 from '../../images/Shirt Banner.png';
import  "../Styles/Promotion2.css";
const Promotion2 =()=>{
    
    return(
        <>
        <Container className="Promotion2">
            <Row >
                <Col>
                <h1>Latest Fashion Trends</h1>
                <h3>Special Offer Upto 50%</h3>
                </Col>
                <Col><img src={promotion2}/></Col>
            </Row>
        </Container>
        </>
    );
}

export default Promotion2;