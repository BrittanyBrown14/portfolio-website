import '../stylesheets/Header.css';

function Header() {
    return (
      <div className="header--head">
        <header className="header--menu">
            <ul className='header--listitems'>
                <li>Home</li>
                <li>About Me</li>
                <li>Github Portfolio</li>
                <li>Skills</li>
                <li>Attributions</li>
            </ul>
        </header>
        <button className='header--button'>Contact Me</button>
      </div>
    );
  }

  export default Header;