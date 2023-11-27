import emailjs from 'emailjs-com';

emailjs.init('oeKVeQ4oHTomcOyFD');
function sendEmail() {
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();
        emailjs.sendForm("service_k3n2vxi", "template_5wnjpv9", this)
            .then(function() {
                console.log('SUCCESS!');
                contactForm.reset();
                
            }, function(error) {
                console.log('FAILED...', error);
            });
    });
}

export default sendEmail;