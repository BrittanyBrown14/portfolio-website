import '../stylesheets/Footer.css';

function Footer() {
    return(
        <div className='footer--main'>
           <footer className='footer-text'>
                <small>© 2023 Brown development. All rights reserved.</small> 
                <small>  
                    <a href="https://www.flaticon.com/free-icons/linkedin" 
                    className="textLink"
                    title="linkedin icons">Linkedin icons created by Smashicons - Flaticon</a> <br/>
                    <a href="https://www.flaticon.com/free-icons/github" 
                    className="textLink"
                    title="github icons">Github icons created by Pixel perfect - Flaticon</a>
                </small> 
            </footer>         
        </div>

    );
}

export default Footer;