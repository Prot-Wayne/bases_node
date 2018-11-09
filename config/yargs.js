const opts = {
    base:{
        demand : true,
        alias: 'b'
    },
    limite:{
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
                            .command('listar', 'Imprime y guarda tablas de multiplicar', opts)
                            .command('crear', 'crea y guarda archivo de txt con la base y límite', opts )//este command se usa siempre y cuando vaya a usar alias                                
                            .help()
                            .argv;

module.exports={
    argv
}