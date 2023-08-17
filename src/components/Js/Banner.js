import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import banner from '../../images/Banner.png';
import '../Styles/Banner.css';
import shirts from '../../images/Shirts.png';
import jeans from '../../images/Pant.png';
import shoes from '../../images/Shoe.png';
import tshirt from '../../images/Tshirt.png'
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


const Banner =()=>{
        

    return(
        <>
        <BrowserRouter>
        <div className="BannerCont">
            <Container>
                <Row >
                    <Col className="Banner-img">
                        <img src={banner}/>
                    </Col>
                    <Col className="base-cont">
                        <Row className="sub-img-cont">
                            <Col className="sub-img" id="shirt">
                                <img src={shirts} />
                                <div className="content">
                                    <h1>Shirt</h1>
                                    
                                    <p>you don't have to be generically good-looking. Being well-dressed is enough</p>
                                    <div className="sub-btn">
                                        <Link to="#shirtSection">Discover More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col className="sub-img" id="jean">
                                <img src={jeans}/>
                                <div className="content">
                                    <h1>Jean</h1>
                                   
                                    <p>Your Belt hold your pants up,But the Belt loops Hold our Belt up</p>
                                    <div className="sub-btn">
                                        <Link to="#jeanSection">Discover More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="sub-img-cont">
                            <Col className="sub-img" id="tshirt">
                                <img src={tshirt} />
                                <div className="content">
                                    <h1>Tshirt</h1>
                                   
                                    <p>Style of Fabric Shirt name after the   T-shap of its Body and Sleeves  </p>
                                    <div className="sub-btn">
                                        <Link to="#tshirtSection">Discover More</Link>
                                    </div>
                                </div>
                            </Col>
                            <Col className="sub-img" id="shoe">
                                <img src={shoes} />
                                <div className="content">
                                    <h1>Shoe</h1>
                                    
                                    <p>Shoe is an item of Footwear intended to Protect and Comfort the Human Foot</p>
                                    <div className="sub-btn">
                                        <Link to="#additionalSection">Discover More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            
        </div>
        </BrowserRouter>
        </>
    );
}

export default Banner;