

const fs = require ('fs');
const crearArchivo = (base = 5) =>{

    let salida = ''
    let n = base;
    
    for (let i = 1; i <= 12; i++){
        const resultado = i*n;
        salida += `${n}x${i} = ${n* i}\n`;
        //console.log(`${n}x${i} = ${n* i}`);
    }
    
    fs.writeFile(`tabla-${n}`, salida, (err) => {
        if(err) throw err;
        console.log('The file has been saved');
    }); 

}
module.exports = {
    crearArchivo
}


