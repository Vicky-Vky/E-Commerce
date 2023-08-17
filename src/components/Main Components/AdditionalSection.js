import React from "react";
import Shoe from "../Js/Shoe";
import Promotion5 from "../Js/Promotion5";
import Todays from "../Js/Todays";


const AdditionalSection = ()=>{
    return(
        <div id="additionalSection">
            <Shoe />
            <Promotion5 />
            <Todays />
        </div>
    );
}

export default AdditionalSection;