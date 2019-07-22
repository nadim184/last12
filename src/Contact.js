import React from "react";
import "./App.css";
import {  Link } from "react-router-dom";
export default function Contact ()  {
    return (
      <div>
          <nav className="navbar">
        <Link className="ite" to="/Home">Home</Link>
        <Link className="ite" to="/profile">Profile</Link> 
        <Link className="ite" to="/Contact">Contact</Link> 
        </nav>
       <div>
           <center>
           <form className="form">
               <input className='inpu' type="text" name="name" placeholder="Full name"/>
               <input className='inpu' type="text" name="phone" placeholder="Phone Number"/>
               <input className='inpu' type="email" name="email" placeholder="Email"/>
               <input className='inpu' type="text" name="message" placeholder="message"/>
               <input className='inpu' type="submit" value="Register" />
           </form>
           </center>
       </div>
       
      </div>
    );
}