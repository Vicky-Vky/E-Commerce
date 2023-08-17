import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import shirtPromo from "../../images/Shirt Offer.png";
import "../Styles/ShirtPromo.css";

const ShirtPromo =()=>{
    return(
        <>
        <Container className="Shirt-promo">
            <Row className="Shirt-promo-cont">
                <Col>
                    <img src={shirtPromo}/>
                </Col>
                <Col className="Shirt-promo-content" >
                    <h1>Exclusive</h1>
                    <br></br>
                    <h1>Deals</h1>
                    <br></br>
                    <h2>On</h2>
                    <br></br>
                    <h1>Shirts</h1>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default ShirtPromo;