import '../stylesheets/AboutMe.css'
import me from '../images/me.jpg';

function AboutMe(){
    return(
        <div className='about--body'>
            <article className='about--article'>
                <h3>Junior Frontend Developer</h3>
                <p className='about--text'>
                    I graduated The University of Greenwich in 2023, with a BSc in Computing, First Class Honours.<br/> 
                    I am currently doing the IBM Front-End Developer Professional Certificate and want to dive into <br/> 
                    Front-End Development.
                    I have completed four of the courses in the certificate and hope <br/>
                    to finish by the end of January.
                    <br/>
                </p>

                <p className='about--text'>
                    <h3>This is why I want to go into Front-End Development:</h3>
                    I enjoy creating things (I sew) so creating websites is taps into that.<br/>
                    I like working with my hands and I also enjoy working with tech, its fun. <br/>
                    I like seeing a project come together as I create it. It is quite satisfying.<br/>
                    I like solving problems, because it feels good to see the end result and <br/>now I know something for next time.
                </p> 

                <p className='about--text'>
                    <h3>My hobbies:</h3>
                    I sew. I have made dresses, trousers, costumes, hoodies and sweatshirts.<br/>
                    I love Japan and the Japanese culture. I've been learning the language for 3 years or so <br/>
                    and am hoping to take the JLPT N5 exam once registration opens up for the new year.<br/>
                    I also enjoy reading and gaming.
                </p>

                <p className='about--text'>
                    <h3>What I am looking for now:</h3>
                    I am currently looking for a role as a Junior Front-End or Web Developer and am based in London. <br/>
                    If you want to get in touch, click 'Contact Me' to see all my contact information. 
                    <br/>
                </p>              
            </article>
                
            <div className="">
                <img src={me} className="about--logo" alt="logo" />
            </div>
        </div>

    );
};

export default AboutMe;

//TODO add space between paragraph titles
//TODO make the paragraphs slightly less opaque
//TODO remove the underline for the main title