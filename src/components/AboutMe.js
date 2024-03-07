import 'stylesheets/AboutMe.css'
import me from 'images/me.jpg';

function AboutMe(){
    return(
        <div className='about--body'>
            <article className='about--article'>
                <h3 className='about--title'>Junior Frontend Developer</h3>
                <div className='about--main-text'>
                    <p className='about--text'>
                        I graduated The University of Greenwich in 2023, with a BSc in Computing, First Class Honours. I have completed the IBM Front-End Developer 
                        Professional Certificate and am currently working on expanding my portfolio.<br/>
                        <br/>
                    </p>

                    <h3 className='about--text-title'>Why I want to go into Front-End Development:</h3>
                    <p className='about--text'>
                        I enjoy creating things (I sew) so creating websites taps into that creativity.<br/>
                        I like working with my hands and I also enjoy working with tech, its fun. <br/>
                        I like seeing a project come together as I create it. It is quite satisfying.<br/>
                        I like solving problems, because it feels good to see the end result and now I know something for next time.
                    </p> 

                    <h3 className='about--text-title'>My hobbies:</h3>
                    <p className='about--text'>
                        I sew. I have made dresses, trousers, costumes, hoodies and sweatshirts.<br/>
                        I love Japan and the Japanese culture. I've been learning the language for 3 years or so
                        and am hoping to take the JLPT N5 exam once registration opens up for the new year.
                        I also enjoy reading and gaming.
                    </p>

                    <h3 className='about--text-title'>What I am looking for now:</h3>
                    <p className='about--text'>
                        I am currently looking for roles as a Junior Front-End or Web Developer, based in London.
                        If you want to get in touch, click 'Contact Me' to see all my contact information. 
                        <br/>
                    </p>
                </div>
              
            </article>
                
            <div className="">
                <img src={me} className="about--image" alt="logo" />
            </div>
        </div>

    );
};

export default AboutMe;
