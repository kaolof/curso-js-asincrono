
//const XMLRequest=require('xmlhttprequest').XMLHttpRequest; si instalamos xmlhttprequest
const API= 'https://api.escuelajs.co/api/v1';

function fetchData( urlApi,callback){
    let xhttp= new XMLHttpRequest(); //controlar todo el flujo del llamado
    xhttp.open('GET', urlApi, true); //para abrir una concexion a nuestra API
    //escuchar diferentes estados que tiene la solicitud y con esto saber cuando esta disponible la informacion
    xhttp.onreadystatechange= function (event){
        //0 no se ha inicializado
        //1 loading, no se ha ejecutado send
        //2 ya se ejecuto el valor de send
        //3 interactuando, esta descargando la solicitud
        //4 se ha completado la llamada
        if(xhttp.readyState===4){
            //200 es que la solicitud ha sido correcta
            if(xhttp.status===200){
                callback(null,JSON.parse(xhttp.requestText));
            }else{
                const error=new Error('Error'+ urlApi);
                return callback(error,null);
            }
        }
    } 
    xhttp.send();
}

// fetchData logica
fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData (`${API}/products/${data1[0].id}`, function(error2,data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

