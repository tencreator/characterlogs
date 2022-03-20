import React from "react";
import {
  BrowserRouter as Router,
  Routes as
  Switch,
  Route
} from "react-router-dom";

import './assets/css/main.css';
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import JeffE from "./pages/characters/JeffE";
import Error from "./pages/Error";

function App() {
  return (
    <>

    <Navbar />

    <Router>
      <Switch>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/backstory/Jeff-Edison" element={ <JeffE /> } />
        <Route element={ <Error /> } />
      </Switch>
    </Router>
    </>
  );
}

export default App;
