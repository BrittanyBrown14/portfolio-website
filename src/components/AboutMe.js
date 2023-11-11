import '../stylesheets/AboutMe.css'
import me from '../images/me.jpg';

function AboutMe(){
    return(
        <div className='about--body'>
            <article className='about--article'>
                <h3>Junior Frontend Developer</h3>
                <p className='about--text'>
                    I graduated The University of Greenwich in 2023, with a BSc in Computing, First Class Honours.<br/> 
                    I am currently doing the IBM Front-End Developer Professional Certificate <br/>and have already completed one of the courses.<br/>
                    and want to dive into Frontend Development.<br/>
                </p>

                <p className='about--text'>
                    This is why I wanna go into FE Dev:<br/>
                    I enjoy creating things (I sew) so creating websites is taps into that.<br/>
                    I like wokring with my hands and I also enjoy working with tech, its fun. <br/>
                    I like seeing a project come together as I create it. It is quite satisfying.<br/>
                    I like solving problems, because it feels good to see the end result and <br/>now I know something for next time.
                </p> 

                <p className='about--text'>
                    My own hobbies:<br/>
                    I sew. I have made dresses, trousers, costumes, hoodies and sweatshirts.<br/>
                    I love Japan and the Japanese culture. I've been learning the language for 3 years or so <br/>
                    and am hoping to take the JLPT N5 exam once registration opens up for the new year.<br/>
                    I also enjoy reading and gaming.
                </p>

                <p className='about--text'>
                    What I am looking for now:<br/>
                    I am currently looking for a role as a junior fe dev and I am based in London. <br/>
                    If want to get in contact with me, drop me an email, call or contect with me on LinkedIn. <br/>
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
//TODO Re-write the main bulk of the text to sound more friendly and professional.