import '../stylesheets/Contact.css'
import phone from '../images/phone.png'
import email from '../images/email.png'
import map from '../images/location.png'
function Contact(){
    return(
        <div className='contact--body'> 
            <h1>Contact page</h1>

            <div className='contact--home'> 
                <article>
                    {/* Add the Contact details similar to how it is in the design. 
                        Get more icons from Flaticon - make sure to include these in the atribbutions page*/}
                    <ul className="contact--info">
                        <li className='info--item'>
                            <img src={phone} className="contact--logo" alt="logo" />
                             <p>+447477933255</p>
                        </li>
                        <li className='info--item'>
                            <img src={email} className="contact--logo" alt="logo" />
                            <p>brittany.brown-work@hotmail.com</p>
                            
                        </li>
                        <li className='info--item'>
                            <img src={map} className="contact--logo" alt="logo" />
                            <p>London, England</p>
                        </li>
                    </ul>      
                </article>
                
                <form className="contact--form">
                    {/* add a form for contact details simlar to the design
                    
                    Make it so that I gert an email sent of those emails
                        Do this using JS 
                        Maybe create a seperate Script file and make it into a class?????*/}
                    <input type="text" placeholder='Full Name' className="form--item"/>
                    <input type="email" placeholder='Email' className="form--item"/>
                    <input type="tel" placeholder='Phone Number' className="form--short-item"/>
                    <input type="text" placeholder='Subject' className="form--short-item"/>
                    <textarea placeholder="Write your message" className="form--message" rows="4" cols="50"> </textarea>
                    <button type="submit" value="Submit" className="form--submit">Submit</button>
                </form>
            </div>
        </div>

    )
}

export default Contact;

//TODO Add functionality to the submit button
//TODO Improve the layout of the COntact page based on the template. 