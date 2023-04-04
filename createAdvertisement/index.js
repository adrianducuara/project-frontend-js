import { createAdvertisementController } from "./createAdvertisementController.js";

const token = localStorage.getItem('token');

if(!token) {
    window.location = '/';
}else{
    const containApp = document.querySelector('#app-create');
    createAdvertisementController(containApp);
}