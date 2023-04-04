export async function getAdvertisementForUpdate(valueId) {
    const getData = await fetch(`http://localhost:8000/api/advertisements/${valueId}`);
    const data = await getData.json();

    return data;
}

export async function updateAdvertisementModel(data, token, valueId) {

  
    const response = await fetch(`http://localhost:8000/api/advertisements/${valueId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    if(!response.ok) {
        throw new Error('Error al actualizar el anuncio');
    }
    
    
}