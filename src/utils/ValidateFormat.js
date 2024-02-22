
const isEmail = (email) =>
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const isNumber = (number) =>
/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(number)

const form = document.forms[0];
const isValid = false;

function validateFormat(elementId)
{
/*     switch (elementId.currentTarget.id) {
        case 'email':
            if(form['email'].value === "" || form['email'].value === null)
            {
                
            }
            
            break;
    
        default:
            break;
    } */

    return isValid;
}

export default validateFormat;
