import { Outlet, Link } from "react-router-dom";
import '../stylesheets/Header.css';

function Header() {
  return (
    <div className="header--head">
      <header className="header--menu">
        <ul className='header--listitems'>
            <li>
              <Link to="/Home" className='menu--link'>Home</Link>
            </li>
            <li>
              <Link to="/AboutMe" className='menu--link'>About Me</Link>
            </li>
            <li>
              <Link to="/Portfolio" className='menu--link'>Github Portfolio</Link>
            </li>
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

  //TODO Change the colour the button turns into when clicked. 


