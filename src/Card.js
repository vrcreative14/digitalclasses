import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
export default class Card extends React.Component {

    componentDidMount(){
//var element = document.getElementById("watchme");
// this.addEventListener("animationstart", listener, false);
// this.addEventListener("animationend", listener, false);
// this.addEventListener("animationiteration", listener, false);
// this.className = "slidein";
    }

    render(){
        return(
            <NavLink to="/course/{}">
            <div className="card">
                <h3>{this.props.name}</h3>
                <p></p>
                <img src={this.props.image_url} className="card-image"/>
                <button className="cardbutton">Visit</button>
            </div>
            </NavLink>
        )
    }
}