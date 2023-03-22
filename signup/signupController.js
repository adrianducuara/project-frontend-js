import { isValidEmail } from "../utils/util.js";
import { createUser } from "./signupModel.js";
import { buildFormSignup } from "./signupView.js";

export function signupController(signupElement) {
    signupElement.appendChild(buildFormSignup());
    const signupForm = signupElement.querySelector('#signup-form');
    const emailAddress = signupElement.querySelector('#email-address');
    const password = signupElement.querySelector('#password');
    const passwordConfirm = signupElement.querySelector('#password-confirm');

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        console.log(formValid(emailAddress.value, password.value, passwordConfirm.value));

        if(formValid(emailAddress.value, password.value, passwordConfirm.value)) {
            try {
                
                await createUser(emailAddress.value, password.value);
                alert('Usuario creado correctamente.');
                signupForm.reset();
                window.location = '/';

            } catch (error) {
                alert(error.message);
            }
        }else {
            alert('Correo electrónico y/o contraseñas no son iguales');
        }
        

    })

    function isValidPassword(password, passwordConfirm) {

        if(password !== passwordConfirm) {
            return false;
        }

        return true;
    }

    function formValid(emailAddress, password, passwordConfirm) {
        return isValidEmail(emailAddress) && isValidPassword(password, passwordConfirm);
    }

    
}
