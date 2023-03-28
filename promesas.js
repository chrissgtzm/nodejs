// Declaramos un arreglo de peras

const peras = ['🍐','🍐','🍐']

//resultado en manzanas 
let manzanas = []

// funcion de flecha que cambia pera por manzana
const procesar =(valor) => {
    return new Promise((resolve,reject)=>{
        //tiempo de conexion a una bd, api
    setTimeout(()=>{
    if (valor ==='🍐' ) { //el triple igual es de caracter estricto
        resolve ('🍎');
    }
    },1000);
});
}

/*for(let i =0;i < peras.length;i++){
    console.log(peras[i])
    let manzana = procesar(peras[i])

} */

//El map acorta la funcion de let
manzanas =peras.map((i)=> procesar(i)) 
 //  console.log(manzanas);
//Iterador de promesas
   const resultado = Promise.all(manzanas);
   resultado.then((respuesta)=>{
    console.log(`valor = ${respuesta}`)
   })

   