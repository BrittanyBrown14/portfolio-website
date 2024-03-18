import 'stylesheets/Contact.css'
import React, { useState } from 'react'
import phone from 'images/phone.png'
import email from 'images/email.png'
import map from 'images/location.png'
import loading from 'images/loading.svg'
import ValidateFormat from 'utils/ValidateFormat.js'
import emailjs from 'emailjs-com';
import AlertDialog from './AlertDialog.js';  

let startLoading = (
    <div className='contact--loading'>
        <img src={loading} alt="loading..." />
    </div>
  )
function Contact(){
    const [modalOpen, setModalOpen] = useState(false);
    const [loading, setLoading] = useState(false)
    const [title, setTitle] = useState("")
    const [message, setMessage] = useState("")
    
    const openModal = () => {
        setModalOpen(true);
       };

    const closeModal = () => {
        setModalOpen(false);
       }

    const sendEmail = (event) => {
 
        emailjs.init('oeKVeQ4oHTomcOyFD');   
        var contactForm = document.getElementById("contactForm"); 
        event.preventDefault();
        emailjs.sendForm("service_k3n2vxi", "template_5wnjpv9", contactForm)
        .then(setLoading(true))
        .then(function(result) 
        {          
            setModalOpen(true)
            setLoading(false)
            setTitle("Email Sent!")
            setMessage("Your email has been sent.")
            contactForm.reset();
            console.log('SUCCESS!', result.text);

        }, 
        function(error) {
            console.log('FAILED...', error);
            setModalOpen(true)
            setLoading(false)
            setTitle("Email Not Sent!")
            setMessage("Your email could not be sent. Please try again or use a different contact method. \n Sorry for the inconvenience.")
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
                    <div>
                        <p className='form--error' id='error--name'></p>
                        <input type="text" placeholder='Full Name' className="form--item" name='from_name' onBlur={ValidateFormat} id='from_name' required/>                     
                    </div>
  
                    <div>
                        <p className='form--error' id='error--email'></p>
                        <input type="email" placeholder='Email (Example: email@email.com)' className="form--item" onBlur={ValidateFormat} id='email' name='from_email' required />
                                                 
                    </div>

                    <div className='form--short-item-container'>
                        <div>
                          <p className='form--error' id='error--phone'></p>                             
                          <input type="number" placeholder='Phone Number (Example: 07123456789)' className="form--short-item" onBlur={ValidateFormat} id='phone'  name='from_number'/>

                        </div>
                        <div>
                            <p className='form--error' id='error--subject'></p>                             
                            <input type="text" placeholder='Subject' className="form--short-item" onBlur={ValidateFormat} id='subject' name='subject' required/>
                        </div>              
                    </div>
                      
                    <div>
                        <p className='form--error' id='error--message'></p>
                        <textarea placeholder="Write your message here" className="form--message" rows="4" cols="50" id='form_message'name='message' 
                        onBlur={ValidateFormat} required> </textarea>                  
                    </div>

                    <button type="submit" value="Send" className="form--submit">Submit</button>
                </form> 
                {loading ? startLoading :  
                    modalOpen && (
                        <AlertDialog
                        isOpen={openModal}
                        title={title}
                        message={message}
                        onClose={closeModal}
                        />
                )}
            </div>
        </div>
    )
}

export default Contact;
