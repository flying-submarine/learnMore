"use strict"
import React from "react"
import ReactDOM from "react-dom"
import Miao from "./images/min.jpeg"

import "./search.less"

class Search extends React.Component {
    render(){
        return <div className="search-text">
            Search Text
            <img src = {Miao} ></img>
        </div>
    }
}
ReactDOM.render(
    <Search ></Search>,
    document.getElementById("root")
);