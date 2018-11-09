const { multiplicar } = require('./multiplicar/multiplicar');// destructuración
const {listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;//importar objeto específico
const colors = require('colors');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        multiplicar(argv.base, argv.limite).then(archivo => console.log(`archivo ${archivo} generado`.green)).catch(err => console.log(err));        
    break;

    default:
    console.log('Comando no reconocido');
}
//let base ="abc";

let argv2 = process.argv;
/* let params = argv[2];
let base = params.split("=")[1]; */


//






 
