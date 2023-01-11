import fetch from 'node-fetch';
const API="https://api.escuelajs.co/api/v1";

function fetchData(){
    return fetch(urlApi);

};

/*fetchData(`${API}/products`)
    //response es la respuesta a la lo que se le hizo fetch, donde esta la info que luego se pasa a json
    .then(response=> response.json())
    .then(products=> {
        console.log(products);
    })
    .then(()=>{//ejemplo de que se pueden anidar varios then
        console.log('hola');
    })
*/
//usamos response para no tener que usar la palabra reservada return y estamos retornando el valor de 
//response en json para obtener los productos
fetchData(`${API}/products`)
    .then(response=>response.json())
    //se retorna la info y ahora la podemos usar en products
    .then(products=>{
        console.log(products)
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response=>response.json())
    .then(product=>{
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response=> response.json())
    .then(category=>{
        console.log(category.name);
    })
    .catch(err=>console.log(err))
    .finally(()=> console.log('finally'));