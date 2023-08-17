import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import promotion4 from '../../images/Tshirt Banner.png';
import  "../Styles/Promotion4.css";

const Promotion4 =()=>{
    
    return(
        <>
        <Container className="Promotion4">
            <Row >
                <Col>
                <h1>Latest Fashion Trends</h1>
                <h3>Special Offer Upto 50%</h3>
                </Col>
                <Col><img src={promotion4}/></Col>
            </Row>
        </Container>
        </>
    );
}

export default Promotion4;