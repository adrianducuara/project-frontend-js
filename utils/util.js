export function buildElementHTMLAttr(element, attriELement, valueElement) {
    const contain = document.createElement(element);
    contain.setAttribute(attriELement, valueElement);

    return contain;
}

export function buildElementHTML(element) {
    const contain = document.createElement(element);

    return contain;
}

export function isValidEmail(emailAddress) {
    const mailRegExp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);

    if(!mailRegExp.test(emailAddress)) {
        return false;
    }

    return true;
}

export function hiddenTagElement(elem_1, elem_2) {
    elem_1.addEventListener('click', () => {
        elem_2.classList.toggle('hidden');
    });
}