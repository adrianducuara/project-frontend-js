export async function createAdvertisementModel(data, token) {

  
    const response = await fetch('http://localhost:8000/api/advertisements', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })

    if(!response.ok) {
        throw new Error('Error al crear el anuncio');
    }
    
    
}