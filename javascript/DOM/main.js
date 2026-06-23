//accedemos al documento HTML
console.log(document)
//sseleccionar elementos del HTML
/**
 *getElementById(): selecciona un elemento por su id
 *querySelector(): selecciona el primer elemento que coincida con el selector CSS, por clase, por ID, por atributo
 *querySelectorAll(): selecciona todos los elementos que coincidan con el selector CSS  
 */
let titulo=document.getElementById("title") 
console.log(titulo);

let entrada_datos=document.querySelector(".entrada_titulo")
//llamando una clase
let formulario=document.querySelector("form")
console.log(formulario);
console.log(entrada_datos);
//seleccionando varios elementos
let lista_inputs=document.querySelectorAll(".entrada_titulo")
console.log(lista_inputs);

//accediendo al TExto del elemento del HTML
let texto_titulo=document.querySelector("h1").textContent;
//cambiando el contenido del h1
texto_titulo.textContent="Bienvenidos al curso de DOM con javascript";
console.log(texto_titulo);
/** 
 * innerHTML: devuelve el contenido HTML de un elemento, incluyendo las etiquetas HTML y el texto visible. Si el elemento contiene otras etiquetas HTML, estas también se incluirán en el resultado.
 * innerText: devuelve el texto visible de un elemento, es decir, el texto que se muestra en la página web, excluyendo cualquier etiqueta HTML o contenido oculto.
 * textContent: devuelve el texto completo de un elemento, incluyendo el texto visible y cualquier texto oculto, así como las etiquetas HTML.
 */
//console.log(texto_titulo.innerHTML);
//accediendo a la <section> del HTML
let contenedor=document.querySelector("#contenedor_dinamico");
console.log(contenedor)
//dibujando las etiquetas <p> dentro de la sección
contenedor.innerHTML=`<p>Hola, soy un párrafo dinámico</p>
<p>algun día aprenderé a programar</p>`;

//creando un nuevo elemento HTML
//let parrafo=document.createElement("p");

function Enviar_Confetti(){
     confetti();
}

function envioDatos(){
   Swal.fire({
  title: "The Internet?",
  text: "That thing is still around?",
  icon: "question"
});
}