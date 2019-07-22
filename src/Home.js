import React from "react";
import "./App.css";
import {  Link } from "react-router-dom";
export default function Home ()  {
    return (
      <div>
          <nav className="navbar">
        <Link className="ite" to="/Home">Home</Link>
        <Link className="ite" to="/profile">Profile</Link> 
        <Link className="ite" to="/Contact">Contact</Link> 
        </nav>
        <div className="container">
            <center>
        <h1 className="text1">welcome to</h1>
        <h1 className="text2">my portfolio</h1>
        </center>
    </div>
      </div>
    );
}