// const args = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');
// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        // console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('======= POR HACER ========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado)
            console.log('======= +++++++++ ========'.green);
        }
        break;

    case 'actualizar':
        // console.log('Actualiza una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let eliminado = porHacer.borrar(argv.descripcion);
        console.log(eliminado);
        break;

    default:
        console.log('Comando no es reconocido.');
        break;
}