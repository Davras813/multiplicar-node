const colors = require('colors');
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch (comando) {
    case 'listar':
        console.log(argv.base, argv.limite);
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(err => console.log(err));
        console.log('Listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido.');
}

//console.log(argv);

//let base = '5';

//let argv2 = process.argv;

//console.log('Limite', argv.limite);
//console.log(argv2);
//console.log(process.argv);
//let parametro = argv[2];
//let base = parametro.split('=')[1];