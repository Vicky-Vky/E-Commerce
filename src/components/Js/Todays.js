import React from "react";
import '../Styles/Todays.css'
import deal from '../../images/about-us-page-heading.png'
const Todays = ()=>{
    return(
        <>
        <div className="today-cont">
            <h1>Today's Deal</h1>
            <div className="line"></div>
            <img src={deal}/>
            <div className="line2"></div>
        </div>
        </>
    );
}

export default Todays;