import { decodeToken } from "../utils/decodeToken.js";
import { buildElementHTMLAttr, hiddenTagElement } from "../utils/util.js";
import { builHeaderAction } from "./headerView.js";

export function headerController(bodyElement, containerAdvertisement) {
    bodyElement.insertBefore(builHeaderAction(), containerAdvertisement);
    const headerMobile = bodyElement.querySelector('#header-mobile');
    const buttonClose = bodyElement.querySelector('#close-button');
    const buttonOpen = bodyElement.querySelector('#open-button');

    hiddenTagElement(buttonClose, headerMobile);
    hiddenTagElement(buttonOpen, headerMobile);

    const token = localStorage.getItem('token');

    if(token) {
        const linkAccountDesktop = bodyElement.querySelector('#link-account-desktop');
        linkAccountDesktop.remove();
        const linkAccountMobile = bodyElement.querySelector('#link-account-mobile');
        linkAccountMobile.remove();
        
        const linkCreateDesktop = bodyElement.querySelector('#link-create-desktop');
        const linkCreateMobile = bodyElement.querySelector('#link-create-mobile');


        const payload = decodeToken(token);

        buildGreeting(payload.username, linkCreateDesktop);
        buildGreeting(payload.username, linkCreateMobile);

    } else {
        const linkCreateDesktop = bodyElement.querySelector('#link-create-desktop');
        linkCreateDesktop.remove();
        const linkCreateMobile = bodyElement.querySelector('#link-create-mobile');
        linkCreateMobile.remove();

    }

   
}

function buildGreeting(name, containerElem) {
    const phraseGrerting = buildElementHTMLAttr('p', 'class', 'text-sm font-semibold leading-6 text-gray-900');
    phraseGrerting.textContent = `Hola ${name}`;
    containerElem.appendChild(phraseGrerting);
}