import { updateAdvertisementController } from "./updateAdvertisementController.js";

const token = localStorage.getItem('token');

if(!token) {
    window.location = '/';
}else{
    const containApp = document.querySelector('#app-update');
    updateAdvertisementController(containApp);
}