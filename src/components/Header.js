import '../stylesheets/Header.css';

function Header() {
    return (
      <div className="header">
        <header className="header--menu">
            <ul className='header--listitems'>
                <li>Home</li>
                <li>About Me</li>
                <li>Github Portfolio</li>
                <li>Skills</li>
            </ul>
        </header>
        <button className='header--button'>Contact Me</button>
      </div>
    );
  }

  export default Header;