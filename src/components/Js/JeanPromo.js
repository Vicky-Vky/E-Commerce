import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import jeanPromo from "../../images/Jeans Offer Final.png";
import "../Styles/JeanPromo.css";

const JeanPromo =()=>{
    return(
        <>
        <Container className="Jean-promo">
            <Row className="Jean-promo-cont">
                <Col>
                    <img src={jeanPromo}/>
                </Col>
                <Col className="Jean-promo-content" >
                    <h1>Exclusive</h1>
                    <br></br>
                    <h1>Deals</h1>
                    <br></br>
                    <h2>On</h2>
                    <br></br>
                    <h1>Jeans</h1>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default JeanPromo;