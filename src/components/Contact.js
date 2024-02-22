import 'stylesheets/Contact.css'
import React, { useState } from 'react'
import phone from 'images/phone.png'
import email from 'images/email.png'
import map from 'images/location.png'
import loading from 'images/loading.svg'
import validateFormat from 'utils/ValidateFormat.js'
import emailjs from 'emailjs-com';
import AlertDialog from './AlertDialog.js';  

const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isNumber = (number) =>
/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(number)

let startLoading = (
    <div className='contact--loading'>
        <img src={loading} alt="loading..." />
    </div>
  )
function Contact(){
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    
    const openModal = () => {
        setModalOpen(true);
       };

    const closeModal = () => {
        setModalOpen(false);
       }

    const sendEmail = (event) => {
        validateFormat();
        if(validateFormat)
        {
            
        }
        emailjs.init('oeKVeQ4oHTomcOyFD');   
        var contactForm = document.getElementById("contactForm"); 
        event.preventDefault();
        emailjs.sendForm("service_k3n2vxi", "template_5wnjpv9", contactForm)
        .then(setLoading(true))
        .then(function(result) 
        {          
            setModalOpen(true)
            setLoading(false)
            contactForm.reset();
            console.log('SUCCESS!', result.text);

        }, 
        function(error) {
            console.log('FAILED...', error);
        });
    }
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

                <form id='contactForm' className="contact--form" onSubmit={sendEmail}>
                    <input type="text" placeholder='Full Name' className="form--item" name='from_name' id='from_name' required/>
                    <input type="email" placeholder='Email' className="form--item" onBlur={validateFormat} id='email' name='from_email' required/>
                    <p className='form--error' id='error--name'>Please enter your email</p>           
                    <div className='form--short-item-container'>
                        <input type="number" placeholder='Phone Number' className="form--short-item" onChange={(validateFormat)} id='phone' name='from_number'/>
                        <input type="text" placeholder='Subject' className="form--short-item" name='subject' required/>
                    </div>
                    <textarea placeholder="Write your message here" className="form--message" rows="4" cols="50" name='message' required></textarea>
                    <button type="submit" value="Send" className="form--submit">Submit</button>
                </form> 
                {loading ? startLoading :  
                    modalOpen && (
                        <AlertDialog
                        isOpen={openModal}
                        title={"Email Sent"}
                        message={"Your email was sent"}
                        onClose={closeModal}
                        />
                )}
            </div>
        </div>
    )
}

export default Contact;
