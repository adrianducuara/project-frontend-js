import { decodeToken } from "../utils/decodeToken.js";
import { deleteMoreElement } from "../utils/util.js";
import { deleteAdvertisement, getAdvertisementDetailData } from "./advertisementDetailModel.js";
import { buildDetailPage } from "./advertisementDetailView.js";

export async function advertisementDetailController(containerDetail) {
    const params = new URLSearchParams(window.location.search);
    const advertisementId = params.get('advertisementId');
    const token = localStorage.getItem('token');

    if(!advertisementId) {
        window.location = '/';
    }else {
        const dataDetail = await getAdvertisementDetailData(advertisementId);
        if(Object.keys(dataDetail).length !== 0) {
            containerDetail.appendChild(buildDetailPage(dataDetail));
            handleDeletedAdvertisement(containerDetail, dataDetail);

        }else {
            alert('No hay detalles para este anuncio');
            window.location = '/';
        }
    }
    
    function handleDeletedAdvertisement(containElem, data) {
        const deleteButton = containElem.querySelector('#delete-advertisement');
        const updateButton = containElem.querySelector('#update-advertisement');
        if(!token) {
            deleteMoreElement([deleteButton, updateButton]);
        }else {
            const tokenUserId = decodeToken(token).userId;
            if(data.userId === tokenUserId) {
                deleteButton.addEventListener('click', () => {
                    const deleteConfirm = confirm('¿Quieres eliminar el anuncio?');
    
                    if(deleteConfirm) {
                        deleteAdvertisement(data.id, token);
                        window.location = '/';
                    }
                })

                updateButton.addEventListener('click', () => {
                    window.location = `/update.html?advertisementId=${advertisementId}`;
                });
            } else {
                deleteButton.remove();
            }
        }
    
    }
}
