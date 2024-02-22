import 'stylesheets/AlertDialog.css'
import React from 'react';

const alertComponent = ({isOpen, title, message, onClose} ) => {
    if (!isOpen) {
        return null; // Render nothing if the alert is closed
      }

    return(
            <section className= 'alert--main'>
                <div className='alert--body'>
                    <h2>{title}</h2>
                    <h3>{message}</h3>
                    <button className='alert--button' onClick={onClose}>Close</button>                    
                </div>
            </section>            
         );
}

export default alertComponent;