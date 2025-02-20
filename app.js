// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//agregar nombres
//validar entrada
//visualizar la lista
//sorteo aleatorio

//funcion para agregar amigos
//funcion para validar entrada
//funcion para visualizar la lista
//funcion para sorteo aleatorio

//funcion para agregar amigos

let amigos = [];


//validar datos con boton añadir
function agregarAmigo() {
  let amigo = document.getElementById("amigo").value;
  if (amigo.length == 0) {
    alert("Debes ingresar un nombre");
  } else {
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    visualizarLista();
  }
}
//funcion visualizar lista
function visualizarLista() {
    //la variable lista recibe el valor de el documento 
  let lista = document.getElementById("listaAmigos");
  // limpia el contenido dentro de la lista
    lista.innerHTML = "";
    /*
    -amigos es el arreglo
    -forEach es la intrucción que le dice a la computadora "Por favor, revisa cada nombre en la lista uno por uno(y realiza cada instrucción independiente en cada nombre)"
    -amigo es el nombre que se le asigna a al contenedor de cada nombre de la lista
    -=> { } es la instrucción que se le da a la computadora para que realice una acción en cada nombre de la lista (arreglo)
    */
    amigos.forEach((amigo) => {
        //crear un elemento en este caso "li" es lista, 
        // es decir li "la lista html" es creada como elemento
        //la variable item recibe el valor del elemento creado
        //la variable item recibe el valor de dentro del documento, un elemento creado li 
        //es decir recibe el valor de un elemento de la lista creada
      let item = document.createElement("li");
      //el valor de la lista es el texto que contiene la variable amigo
      item.textContent = amigo;
      lista.appendChild(item);
    });
    }
//funcion sortear amigo
function sortearAmigo() {

    //si la lista de amigos es igual a 0
    if (amigos.length == 0) {
        alert("No hay amigos en la lista");
        return;        
    }
    //la variable ganador recibe el valor de la función sorteoAleatorio
    else {
        sorteoAleatorio();

    }
}
function sorteoAleatorio() {

    //la variable indice recibe el valor de la función random
    let indice = Math.floor(Math.random() * amigos.length);
    //la variable ganador recibe el valor de la lista de amigos en el indice
    let ganador = amigos[indice];
    //retorna el valor de ganador 
    console.log(ganador)
    document.getElementById("resultado").textContent = "el amigo seceto es" + ganador;
    return ganador;
   
}