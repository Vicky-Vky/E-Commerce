import React from "react";
import promobanner5 from '../../images/Product Banner.png';
import '../Styles/Promotion5.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Promotion5 = ()=>{
    return(
        <>
         <Container className="Promotion5">
            <Row>
                <Col>
                    <img src={promobanner5}/>    
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

export default Promotion5;