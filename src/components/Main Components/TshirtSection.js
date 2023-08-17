import React from "react";
import Tshirt from "../Js/Tshirt";
import TshirtPromo from "../Js/TshirtPromo";
import Promotion4 from "../Js/Promotion4";

const TshirtSection = () =>{
    return(
        <div id="tshirtSection">
            <Tshirt />
            <Promotion4 />
            <TshirtPromo />
        </div>
    );
}

export default TshirtSection;