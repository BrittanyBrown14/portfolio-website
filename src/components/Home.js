import me from '../images/me-grad-edit.jpg';
import linkedin from '../images/linkedin.png';
import github from '../images/github.png';
import '../stylesheets/Home.css';

function Home() {
  return (
    <div className="home">

      <div className="text"> 
        <h3>Hi, I'm</h3>
        <h1>Brittany Brown</h1>
        <h2>And I am an <span className='devText'>Aspiring Frontend Developer</span></h2>
        <p>
          This is a website I have made to showcase my portfilo.<br/>
          This website is my first project using React so far.<br/>
          I based the design off of a template I found in Figma and used <br/>
          that as inspiration. You can find that template         <a
          className="textLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          here.
        </a><br/>
        </p>


        {/* <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Smashicons - Flaticon</a> 
        <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a>*/}
      
        <div className='icons'>
          <img src={linkedin} className="icon--linkedin" alt="logo" />
          <img src={github} className="icon--github" alt="logo" />
        </div>

        <button className='home--button'>Download CV</button>
      </div> 

      <div className="home--header">
        <img src={me} className="home--logo" alt="logo" />
      </div>



    </div>


  );
}

export default Home;

// TODO find a better background pic. maybe a lighter image colour or a lighter shade of blue
// TODO add a download CV button
// TODO add the icon ref links to the footer
// TODO consider changing the colour scheme