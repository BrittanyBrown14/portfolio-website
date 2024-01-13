import me from 'images/me-grad-edit.jpg';
import linkedin from 'images/linkedin.png';
import github from 'images/github.png';
import resume from './BrittanyResume.pdf'
import 'stylesheets/Home.css';


function Home() {
  return (
    <div className="home">

      <div className="text"> 
        <h3>Hi, I'm</h3>
        <h1>Brittany Brown</h1>
        <h2>And I am an <span className='devText'>Aspiring Frontend Developer</span></h2>
        <p>
          This is a website I have made to showcase my portfolio.<br/>
          This website (Still in development) is my first project using React so far.<br/>
          I based the design off of a template I found in Figma and used <br/>
          that as inspiration. You can find that template         
          <a
            className="textLink"
            href="https://www.figma.com/community/file/1294537255181873571"
            target="_blank"
            rel="noopener noreferrer"
          > here.
          </a><br/>
          For the best experience, use a laptop/desktop.
        </p>
      
        <div className='icons'>
          <a href="https://www.linkedin.com/in/brittany-k-brown/">
              <img src={linkedin} className="icon--linkedin" alt="logo" />        
          </a>
          <a href="https://github.com/BrittanyBrown14/">
              <img src={github} className="icon--github" alt="logo" />            
          </a>
        </div>

        <a href={resume} >
          <button className='home--download-button'>Download CV</button>
        </a>
        
      </div> 

      <div className="home--body">
        <img src={me} className="logo" alt="logo" />
      </div>
    </div>

  );
}

export default Home;

// TODO find a better background pic. maybe a lighter image colour or a lighter shade of blue
// TODO find a better logo pic. Something to do with coding but a free stock photo.
// TODO consider changing the colour scheme
// TODO make the website layout more fluid.