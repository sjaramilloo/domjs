function titulo() {
    const titulo = document.querySelector("h1").textContent;
    return titulo
}

console.log(titulo);


// Para encontrar los todos los que cumplan con el critetio de busqueda (el criterio se escribe como un selector de css)
document.querySelectorAll(".card__job-link.gojob");


// captura todos los links que cumplen con el criterio que quiero en un array 

var lista = document.querySelectorAll(".card__job-link.gojob");

// Recorro la lista 
for (let index = 0; index < lista.length ; index++) {
    // guaddo el txtcontent de cada indice en X
    var x = lista[index].textContent
    // se muestra X
        console.log(x);
    } 


    //--------------------------------------------------------------------------


function crear(tag, contenido){
    // Crear el elemento deseado en los parametros.
    let elemento = document.createElement(tag);


    //Poner el contenido dentro del elemento que se acaba de crear.

    let contenido  = document.createTextNode(contenido);
        elemento.appenChild(contenido);

    //Ya teniendo contenido se procede a pintar el elemento en el Html

    document.body.appenChild(elemento);
    
}


crear("h1", "este es un trabajo");


function crear(tag, contenido){
    let elemento = document.createElement(tag);
    let texto  = document.createTextNode(contenido);
        elemento.appendChild(texto);
    document.body.appendChild(elemento);   
}
    crear("h1", "este es un trabajo");