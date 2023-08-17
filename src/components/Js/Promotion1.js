import React from "react";
import promobanner1 from '../../images/Product Banner 2.png';
import '../Styles/Promotion1.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Promotion1 = ()=>{
    return(
        <>
         <Container className="Promotion1">
            <Row>
                <Col>
                    <img src={promobanner1}/>    
                </Col>
                <Col>
                    <h1 >EXCLUSIVE OFFER</h1>
                    <h3>  Grab the Special Deal</h3>
                </Col>
            </Row>
         </Container>
        </>
    );
}

export default Promotion1;