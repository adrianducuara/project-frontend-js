async function getAdvertisementList(api) {

    const getData = await fetch(api);
    const data = await getData.json();

    if(!getData.ok) {
        throw new Error('No hay anuncios activos.');
    }

    return data;
}

const URL = 'http://localhost:8000/api/advertisements';

export const data = getAdvertisementList(URL);