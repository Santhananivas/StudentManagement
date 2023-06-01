import React, { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Studentdetails from "./studentdata";
import Update from "./updatedetails";


function App(){
//const home= lazy(() => import("./Home"));
//const stude=lazy(() => import("./Studentdata"))

  return(
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/student-details" element={<Studentdetails/>}></Route>
      <Route path="/updatedetails/:id" element={<Update/>}></Route>
    </Routes>
    
    
    
  )
}

export default App;