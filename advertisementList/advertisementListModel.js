async function getAdvertisementList(api) {
    const getData = await fetch(api);
    const data = await getData.json();
    return data;
}

const URL = '/db.json';

export const data = getAdvertisementList(URL);