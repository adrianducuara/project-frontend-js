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

function hiddenLoading(advertisementContainer) {
    const loadingElement = advertisementContainer.querySelector('.lds-ellipsis');
    loadingElement.classList.add('hidden');
}

export async function advertisementListViewController(element){
    let wrapperAdvertisementList = buildWrapperLayout();
    let errorService = buildModalError('Hubo un problema', 'Se ha producido un error al cargar los productos.', 'Entendido');
    let loadingELement = buildLoading();
    element.appendChild(wrapperAdvertisementList);
    element.appendChild(errorService);
    const advertisementContainer = document.querySelector('#product-container');

    advertisementContainer.appendChild(loadingELement);

    let dataAdvertisementList = await getDataAsync();
    
    hiddenLoading(advertisementContainer);

    if(dataAdvertisementList.hasOwnProperty('advertisements')) {
        if(dataAdvertisementList.advertisements.length !== 0) {
            for (let advertisement of dataAdvertisementList.advertisements) {
                const advertisementElement = buildAdvertisementList(advertisement);
                advertisementContainer.appendChild(advertisementElement);
            }
        }else {
            advertisementContainer.removeChild(loadingELement);
            messageEmptyAdvertisement(advertisementContainer);
        }
    }else {
        messageEmptyAdvertisement(advertisementContainer);
        modalErrorService(errorService);
    }



}


