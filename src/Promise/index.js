/*const promise= new Promise(function (resolve,reject){
     console.log('hey');
});*/

const cows=20;

const countCows= new Promise( function (resolve,reject){
    if (cows>10){
        resolve(`We have ${cows} cows on de the farm`);
    }else{
        reject("there no cows on the farm");
    }
});

countCows.then((result)=> { //usamos el then para mostrar el resultado uqe vendria a ser lo obtenido de resolve
    console.log(result);
}).catch((error)=>{//permite capturar el reject
    console.log(error);
}).finally(()=>console.log('finally'));// cuando ya la terminacion de esta ejecion ya termino