import { getAdvertisementForUpdate, updateAdvertisementModel } from "./updateAdvertisementModel.js";
import { buildUpdateAdvertisement } from "./updateAdvertisementView.js";

export async function updateAdvertisementController(containElement) {
    const params = new URLSearchParams(window.location.search);
    const advertisementId = params.get('advertisementId');

    const data = await getAdvertisementForUpdate(advertisementId);

    containElement.appendChild(buildUpdateAdvertisement(data));

    const saleType = containElement.querySelector('#sale-type');
    const purchaseType = containElement.querySelector('#purchase-type');

    if(data.type === 'venta') {
        saleType.setAttribute('checked', '');
    } else {
        purchaseType.setAttribute('checked', '');
    }

    const formCreate = containElement.querySelector('#form-update');
    
    formCreate.addEventListener('submit', async (event) => {

        event.preventDefault();

        const actionConfirm = confirm('¿Estas seguro de actualizar la información de esta publicidad?');

        if(actionConfirm) {
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
                await updateAdvertisementModel(advertisementData, token, advertisementId);
                window.location = '/';
            } catch (error) {
                alert(error.message);
            }
        }
    

    })
}