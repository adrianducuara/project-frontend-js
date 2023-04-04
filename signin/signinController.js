import { isValidEmail } from "../utils/util.js";
import { loginUser } from "./signinModel.js";
import { buildLoginForm } from "./signinView.js";

export function signinController(signinElement) {
    signinElement.appendChild(buildLoginForm());
    const emailInput = signinElement.querySelector('#email-address');
    const passwordInput = signinElement.querySelector('#password');

    signinElement.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        if(!isValidEmail(emailInput.value)) {
            alert('Correo electrónico inválido.');
        } else {
            try {
                const jwt = await loginUser(emailInput.value, passwordInput.value);
                localStorage.setItem('token', jwt);
                window.location = '/';
            } catch (error) {
                alert(error.message);
            }

        }

    });
}