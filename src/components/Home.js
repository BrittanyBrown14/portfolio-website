import me from '../images/me-grad-edit.jpg';
import '../stylesheets/Home.css';

function Home() {
  return (
    <div className="Home">
      <div className="Text"> 
        <h3>Hi, I'm</h3>
        <h1>Brittany Brown</h1>
        <h2>And I am an <span className='DevText'>Aspiring Frontend Developer</span></h2>
        <p>
          I am creating this website to showcase my portfilo.<br/>
          This website is also my first project using React.<br/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div> 
      
      <div className="Home-header">
        <img src={me} className="Home-logo" alt="logo" />
      </div>
    </div>


  );
}

export default Home;
