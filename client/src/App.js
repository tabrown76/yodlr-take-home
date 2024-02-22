import React from "react";
import {BrowserRouter} from "react-router-dom";
import Nav from "./Nav";
import Routes from "./Routes";
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Nav />      
      <Routes />
    </BrowserRouter>
  )
}

export default App;
