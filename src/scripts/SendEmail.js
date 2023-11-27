import emailjs from 'emailjs-com';

emailjs.init('oeKVeQ4oHTomcOyFD');
function sendEmail(event) {
    var contactForm = document.getElementById("contactForm");
        event.preventDefault();
        emailjs.sendForm("service_k3n2vxi", "template_5wnjpv9", contactForm)
            .then(function() {
                alert('Your mail is sent!');
                contactForm.reset();
                console.log('SUCCESS!');
                
            }, function(error) {
                console.log('FAILED...', error);
            });
}

export default sendEmail;