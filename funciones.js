/*Funcion en js

function suma(x=1,y){
   return x+y;
}
console.log(suma (4,3)); */

/* funciones de flecha
const flecha_1 = (a,b) => {
    return a +b;
} */

const validador = (a,b) =>{
    if (a<b){
        return a+b;
    } else {
        return a*b;
    }
}

console.log(validador(4,3))