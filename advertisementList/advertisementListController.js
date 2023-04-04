import { buildLoading } from "../spinner/spinnerView.js";
import { data } from "./advertisementListModel.js";
import { buildAdvertisementList, buildWrapperLayout } from "./advertisementListView.js";

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



function hiddenLoading(advertisementContainer) {
    const loadingElement = advertisementContainer.querySelector('.container-loader');
    loadingElement.classList.add('hidden');
}

export async function advertisementListViewController(element){
    let wrapperAdvertisementList = buildWrapperLayout();
    let loadingELement = buildLoading();
    element.appendChild(wrapperAdvertisementList);
    const advertisementContainer = document.querySelector('#product-container');

    advertisementContainer.appendChild(loadingELement);

    let dataAdvertisementList = await getDataAsync();
    hiddenLoading(advertisementContainer);
    
    try {
        if(dataAdvertisementList.length !== 0) {
            for (let advertisement of dataAdvertisementList) {
                const advertisementElement = buildAdvertisementList(advertisement);
                advertisementContainer.appendChild(advertisementElement);
            }
        }else {
            advertisementContainer.removeChild(loadingELement);
            messageEmptyAdvertisement(advertisementContainer);
        }
    } catch (error) {
        alert('No encontramos anuncios activos.');
    }

    



}


