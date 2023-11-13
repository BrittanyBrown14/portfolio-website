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
            <li>
              <Link to="/Home" className='menu--link'>Home</Link>
            </li>
            <li>
              <Link to="/AboutMe" className='menu--link'>About Me</Link>
            </li>
            <li>Github Portfolio</li>
            <li>Skills</li>
        </ul>
        
      </header>

      <button className='header--button'>
        <Link to="/Contact" className='menu--button-link'>Contact Me</Link>
      </button>
      
      <Outlet/>
    </div>
  );
}

export default Header;

  //TODO Figure out a way to use fuctions in an external script file
  //TODO Change the colour the button turns into when clicked. 