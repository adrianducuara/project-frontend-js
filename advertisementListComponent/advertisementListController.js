import { data } from "./advertisementListModel.js";
import { buildAdvertisementList, buildLoading, buildModalError, buildWrapperLayout } from "./advertisementListView.js";

function messageEmptyAdvertisement(container) {
    return container.textContent = 'No hay anuncios';
}

async function getDataAsync() {
    let dataAdvertisement = {};

    try {
        dataAdvertisement = await data;
    } catch (error) {
        dataAdvertisement = {};
    }

    return dataAdvertisement;
}

function modalErrorService(modal) {
    const modalButton = document.querySelector('#modal-button');

    modal.classList.remove('hidden');

    modalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    })
}

export async function advertisementListViewController(element){
    let wrapperAdvertisementList = buildWrapperLayout();
    let errorService = buildModalError('Hubo un problema', 'Se ha producido un error al cargar los productos.', 'Entendido');
    let loadingELement = buildLoading();
    element.appendChild(wrapperAdvertisementList);
    element.appendChild(errorService);
    const productContainer = document.querySelector('#product-container');
    let advertisementElement = '';
    
    let dataAdvertisementList = await getDataAsync();
    
    productContainer.appendChild(loadingELement);

    if(dataAdvertisementList.hasOwnProperty('advertisements')) {
        if(dataAdvertisementList.advertisements.length !== 0) {
            productContainer.removeChild(loadingELement);
            for (let advertisement of dataAdvertisementList.advertisements) {
                advertisementElement = buildAdvertisementList(advertisement);
                productContainer.appendChild(advertisementElement);
            }
        }else {
            productContainer.removeChild(loadingELement);
            messageEmptyAdvertisement(productContainer);
        }
    }else {
        messageEmptyAdvertisement(productContainer);
        modalErrorService(errorService);
    }


}


