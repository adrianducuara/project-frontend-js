import { data } from "./advertisementListModel.js";
import { buildAdvertisementList, buildLoading, buildWrapperLayout } from "./advertisementListView.js";

export async function advertisementListViewController(element){
    let wrapperAdvertisementList = buildWrapperLayout();
    let loadingELement = buildLoading();
    element.appendChild(wrapperAdvertisementList);
    const productContainer = document.querySelector('#product-container');
    let advertisementElement = '';
    let dataAdvertisement = '';
    try {
        dataAdvertisement = await data;
    } catch (error) {
        console.log('Eror al cargar los anuncios', error);
    }

    productContainer.appendChild(loadingELement);

    if(dataAdvertisement.advertisements.length !== 0) {
        productContainer.removeChild(loadingELement);
        for (let advertisement of dataAdvertisement.advertisements) {
            advertisementElement = buildAdvertisementList(advertisement);
            productContainer.appendChild(advertisementElement);
            
        }
    } else {
        productContainer.textContent = 'No hay anuncios';        
    }


    
}


