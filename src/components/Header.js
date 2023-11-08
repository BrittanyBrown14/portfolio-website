import '../stylesheets/Header.css';
// import scripts from '../scripts/HeaderScript.js'

 function Header() {
    return (
      <div className="header--head">
        <header className="header--menu">
        {/* <ul onMouseOver={scripts.onHover} onMouseOut={scripts.offHover} className='header--listitems'> */}
            <ul onMouseOver={onHover} onMouseOut={offHover} className='header--listitems'>
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

    function onHover(e) {
      e.target.style.color = '#a85c24';
    }  
    function offHover(e) {
      e.target.style.color = 'White';
    } 
  export default Header;

  //TODO Figure out a way to use fuctions in an external script file