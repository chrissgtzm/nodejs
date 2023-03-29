

const { argv } = require('yargs');

const {crearArchivo} = require('./multiplicar')

crearArchivo(7);



// console.log('hola'.rainbow);




console.log(argv);

console.log(argv.base);

crearArchivo(argv.base);