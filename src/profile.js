import React from "react";
import "./App.css";
import image from "./nadim.jpg"
import {  Link } from "react-router-dom";

export default function profile () {
      return (
        <div>
            <nav className="navbar">
          <Link className="ite" to="/Home">Home</Link>
          <Link className="ite" to="/profile">Profile</Link> 
          <Link className="ite" to="/Contact">Contact</Link> 
          </nav>
         
          <div className="all">
              <div><img className="nadim" src={image} alt="me"/></div>
              <div className="aa">
              <h1 className="tit">About me</h1>
              <h2 className="tit2"> what i do ? </h2>
              <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
          </div>
         
        </div>
      );
  }