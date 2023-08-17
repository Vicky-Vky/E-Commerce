import React from "react";
import promobanner3 from '../../images/Jeans Banner.png';
import '../Styles/Promotion3.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Promotion3 = ()=>{
    return(
        <>
         <Container className="Promotion3">
            <Row>
                <Col>
                    <img src={promobanner3}/>    
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

export default Promotion3;