// const cliente ={
//     nombre: 'server',
//     llamarCliente: function(){
//         let that = this;
//         setTimeout(function(){
//             console.log(that.nombre);
//         },
//         3000);
//     }
// }
//     cliente.llamarCliente();
  
// Funcion de flecha
const cliente ={
    nombre: 'server',
    llamarCliente: function(){
        setTimeout(() =>{
            console.log(this.nombre);
        },
        3000);
    }
}
    cliente.llamarCliente();
    
    
    
//     (){
//         console.log(this.nombre)
//     },
//     llamarClienteflecha: () => {
//         console.log(this.nombre)
//     }
// }
// console.log(cliente.llamarClienteflecha())