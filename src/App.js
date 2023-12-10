import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import RouteCompo from "./Components/Routes/RouteCompo";
import React from "react";
import './Components/Style.css'


function App() {
  return (
   <>
   <BrowserRouter>
   <Header/>
   <RouteCompo/>
   </BrowserRouter>
   </>
  )
}

export default App;
