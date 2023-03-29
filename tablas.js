/*const fs = require ('fs');
let salida = ''
let n = 5;

for (let i = 1; i <= 12; i++){
    const resultado = i*n;
    salida += `${n}x${i} = ${n* i}\n`;
    //console.log(`${n}x${i} = ${n* i}`);
}

fs.writeFile('tabla-5.txt', salida, (err) => {
    if(err) throw err;
    console.log('The file has been saved');
}); */


const fs = require ('fs');
let salida = ''
let n = 9;

for (let i = 1; i <= 12; i++){
    const resultado = i*n;
    salida += `${n}x${i} = ${n* i}\n`;
    //console.log(`${n}x${i} = ${n* i}`);
}

fs.writeFile('tabla-9.txt', salida, (err) => {
    if(err) throw err;
    console.log('The file has been saved');
}); 