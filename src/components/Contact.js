import 'stylesheets/Contact.css'
import React from 'react'
import phone from 'images/phone.png'
import email from 'images/email.png'
import map from 'images/location.png'
import sendEmail from 'utils/SendEmail'

function Contact(){

    return(
        <div className='contact--body'> 
            <h1>Contact page</h1>
            <div className='contact--home'> 
                <article>
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
                
                <form id='contactForm' className="contact--form">
                    <input type="text" placeholder='Full Name' className="form--item" name='from_name' required/>
                    <input type="email" placeholder='Email' className="form--item" name='from_email' required/>
                    <div className='form--short-item-container'>
                        <input type="tel" placeholder='Phone Number' className="form--short-item" name='from_number'/>
                        <input type="text" placeholder='Subject' className="form--short-item" name='subject' required/>
                    </div>
                    <textarea placeholder="Write your message here" className="form--message" rows="4" cols="50" name='message' required></textarea>
                    <button type="submit" value="Send" className="form--submit" onClick={(sendEmail)}>Submit</button>
                </form> 
            </div>
        </div>
    )
}

export default Contact;

//TODO Create a pop up when submitted, if it sent or not 
//TODO Look into validations for the contact form
