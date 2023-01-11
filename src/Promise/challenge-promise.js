import fetch from 'node-fetch';
const API="https://api.escuelajs.co/api/v1";

function postData(urlApi,data){
    const response= fetch(urlApi,{
        method:'POST',
        credencials: 'same-origin',
        headers: {
            'Content-type': 'appLocation/json'
        },
        body: JSON.stringify(data)
    });
    return response;
}

const data={
    //buscar info en la api
}

postData(`${API}/products`, data)
    .then(response=>response.json())
    .then(data=>console.log(data))