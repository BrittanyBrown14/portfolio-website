import React from 'react';
import { Outlet, Link } from "react-router-dom";

import '../stylesheets/Header.css';

function onHover(e) {
  e.target.style.color = '#a85c24';
}  
function offHover(e) {
  e.target.style.color = 'White';
} 

function Header() {
  return (
    <div className="header--head">
      <header className="header--menu">
      {/* <ul onMouseOver={scripts.onHover} onMouseOut={scripts.offHover} className='header--listitems'> */}

        <ul onMouseOver={onHover} onMouseOut={offHover} className='header--listitems'>
            <li className='menu--link'>
              <Link to="/Home" >Home</Link>
            </li>
            <li id='menu--about'>
              <Link to="/AboutMe">About Me</Link>
            </li>
            <li>Github Portfolio</li>
            <li>Skills</li>
            <li>Attributions</li>
        </ul>
        <Outlet/>
      </header>

      <button className='header--button'>Contact Me</button>
    </div>
  );
}

export default Header;

  //TODO Figure out a way to use fuctions in an external script file