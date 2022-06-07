import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/scss/style.scss";
import PageHotel from "./pages/PageHotel";
import PageDestination from "../"

function App() {
    return ( <div className = "App" >
        <Router >
        <Route path = "/" component = { PageHotel } ></Route>
        <Route path = "/" component = {PageDestination}></Route>
        </Router > </div>
    );
}

export default App;