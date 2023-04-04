import { createAdvertisementModel } from "./createAdvertisementModel.js";
import { buildCreateAdvertisement } from "./createAdvertisementView.js";

export function createAdvertisementController(containElement) {
    containElement.appendChild(buildCreateAdvertisement());

    const formCreate = containElement.querySelector('#form-create');
    
    formCreate.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(formCreate);
        const imageContent = formData.get('url-image');
        const nameContent = formData.get('name');
        const priceContent = formData.get('price');
        const descriptionContent = formData.get('about');
        const typeContent = formData.get('type-option');
        const token = localStorage.getItem('token');

        const advertisementData = {
            image: imageContent,
            name: nameContent,
            description: descriptionContent,
            price: priceContent,
            type: typeContent
        }

        try {
            await createAdvertisementModel(advertisementData, token);
            window.location = '/';
        } catch (error) {
            alert(error.message);
        }
        
    })
}