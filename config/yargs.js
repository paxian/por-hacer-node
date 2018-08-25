const descripcion = {
    demand: true,
    alias: d,
    desc: 'Descripcion de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un element por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina una tarea escpecificando su descripcion', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}