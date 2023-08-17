import React from "react";
import Shirt from "../Js/Shirt";
import Promotion2 from "../Js/Promotion2";
import ShirtPromo from "../Js/ShirtPromo";

const ShirtSection = ()=>{
    return(
        <div id="shirtSection">
        <Shirt />
        <Promotion2 />
        <ShirtPromo />
        </div>
    );
}

export default ShirtSection;