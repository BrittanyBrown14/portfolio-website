import error from './ErrorMessages.json'

const isEmail = (email) =>
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isNumber = (number) =>
/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(number)

function ValidateFormat(elementId)
{
    const form = document.forms[0];
    let isValid = false;
    switch (elementId.currentTarget.id) {
        case 'from_name':
            if(form['from_name'].value === "" || form['from_name'].value === null)
            {                
                isValid = false; 
                document.getElementById('error--name').style.display = 'block';
                document.getElementById('error--name').innerText = error.name.null;
            }
            else
            {
                isValid = true;
                document.getElementById('error--name').style.display = 'none';
            }
            break;


        case 'email':
            if(form['from_email'].value === "" || form['from_email'].value === null)
            {                
                isValid = false; 
                document.getElementById('error--email').style.display = 'block';
                document.getElementById('error--email').innerText = error.email.null;
            }
            else if(!isEmail(form['email'].value))
            {
                isValid = false
                document.getElementById('error--email').style.display = 'block';
                document.getElementById('error--email').innerText = error.email.invalid;
            }
            else
            {
                isValid = true;
                document.getElementById('error--email').style.display = 'none';
            }
            break;
        
        case 'phone':
            if(!isNumber(form['phone'].value))
            {
                isValid = false
                document.getElementById('error--phone').style.display = 'block';
                document.getElementById('error--phone').innerText = error.number.invalid;
            }
            else
            {
                isValid = true;
                document.getElementById('error--phone').style.display = 'none';
            }
            break;

        case 'subject':
            if(form['subject'].value === "" || form['subject'].value === null)
            {                
                isValid = false; 
                document.getElementById('error--subject').style.display = 'block';
                document.getElementById('error--subject').innerText = error.subject.null;
            }
            else
            {
                isValid = true;
                document.getElementById('error--subject').style.display = 'none';
            }
            break;

        case 'form_message':
            if(form['message'].value === "" || form['message'].value === null)
            {                
                isValid = false; 
                document.getElementById('error--message').style.display = 'block';
                document.getElementById('error--message').innerText = error.message.null;
            }
            else
            {
                isValid = true;
                document.getElementById('error--message').style.display = 'none';
            }
            break;
        default:
            break;
    } 

    return isValid;
}

export default ValidateFormat;
