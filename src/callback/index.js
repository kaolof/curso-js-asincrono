function sum(num1, num2){
    return num1+num2;
}

function calc(num1, num2, callback){
    return callback(num1,num2);
}

console.log(calc(2,2,sum));

setTimeout(()=>{
    console.log('hola JS')
},2000);

function grettin(name){
    console.log(`hola ${name}`);
}

//setTimeout(callback, tiempo, argumento que recibe la funcion callback)
setTimeout(grettin, 2500, "Kao");

