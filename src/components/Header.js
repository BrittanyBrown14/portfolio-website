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