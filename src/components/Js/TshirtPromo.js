import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import tshirtPromo from "../../images/Poster Main.png";
import "../Styles/TshirtPromo.css";

const TshirtPromo =()=>{
    return(
        <>
        <Container className="Tshirt-promo">
            <Row className="Tshirt-promo-cont">
                <Col>
                    <img src={tshirtPromo}/>
                </Col>
                <Col className="Tshirt-promo-content" >
                    <h1>Exclusive</h1>
                    <br></br>
                    <h1>Deals</h1>
                    <br></br>
                    <h2>On</h2>
                    <br></br>
                    <h1>Tshirt</h1>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default TshirtPromo;