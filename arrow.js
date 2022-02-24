const perro = {
    raza: 'Gran_danes',
    color: 'Negro',
    corre: function(){
        console.log('salio correindo ${this.raza} ${this.color}');
    },
    para: () =>{
        console.log('se detuvo a comer el ${this.raza} ${this.color}');
    }
}
