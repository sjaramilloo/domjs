// function crearFrase(frase, callback) {
//     var miFrase = "solo se que," + frase;
//     callback(miFrase);
// }
// function logFrase(frase){
//     console.log(frase);
// }
// crearFrase("nada sé", logFrase);

function solicitudServidor(consulta, callback) {
    setTimeout(function(){
        var respuesta = consulta + "esta Full";
        callback(respuesta);
    }, 
    2000);
}
    function obtenerRespuesta(resul){
        console.log("Respuesta del servidor: " + resul);
    }
    solicitudServidor("la petición ",obtenerRespuesta);
