import React from "react";
import {Routes, Route, useNavigate, Router} from 'react-router-dom';
import Home from "./components/Main Components/Home.js";
import ShirtSection from "./components/Main Components/ShirtSection.js";
import JeanSection from "./components/Main Components/JeanSection.js";
import TshirtSection from "./components/Main Components/TshirtSection.js";
import AdditionalSection from "./components/Main Components/AdditionalSection.js";
import FooterSection from "./components/Main Components/FooterSection.js";




function App() {


  return (

    

    <div className="App">
      <Home />
      <ShirtSection />
      <JeanSection />
      <TshirtSection />
      <AdditionalSection/>
      <FooterSection />
    
    </div>
  );
}

export default App;
