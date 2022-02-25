// // crear o diseñar promesa
// function mipromesa()
// return new Promise(function(resolve, reject){
//     let suma = 2 + 6;
//     if(suma === 8){
//         resolve("correto");
//     }else{
//         reject("Eror");
//     }
// }); 
// // Hasta aquí se crea la promesa
// mipromesa.then(function(mensaje){
//     console.log(mensaje);
// }).catch(function(error){
//     console.log(error);
// });


function mipromesa(){
    return new Promise(function(resolve, reject){
        let tareaRealizada = true;
        if(tareaRealizada === true){
            let dispro ={
                color: "negro",
                tipo: "movil"
            }
            resolve(dispro);
        }
        else{
            reject("Eror, no ganaste tu movil");
        }
    }); 
}
    mipromesa().then(function(mensaje){
        console.log(mensaje);
    }).catch(function(error){
        console.log(error);
    });

