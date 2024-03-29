export async function getAdvertisementDetailData(valueId) {
    const getData = await fetch(`http://localhost:8000/api/advertisements/${valueId}`);
    const data = await getData.json();

    return data;
}

export async function deleteAdvertisement(valueId, token) {
    const response = await fetch(`http://localhost:8000/api/advertisements/${valueId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    })

    if(!response.ok) {
        throw new Error('No se pudo eliminar el anuncio');
    }
}