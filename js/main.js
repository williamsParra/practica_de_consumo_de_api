//capturando ubicacion de destino
const contenido = document.querySelector(".contenido");
const btn_siguiente = document.getElementById("cargarMas");
const ruta_Api ="https://rickandmortyapi.com/api/character";
let numeroMax;
let carga=1;
let ruta_Siguiente;



function dibujarPersonaje(ob){  
    //creando elementos html a modificar
    const personaje = document.createElement("div");
    const nombre = document.createElement("h3");
    const img = document.createElement("img");
    const detalle = document.createElement("div");
    const status = document.createElement("p");
    const statusR = document.createElement("p");
    const species = document.createElement("p");
    const speciesR = document.createElement("p");
    const gender = document.createElement("p");
    const genderR = document.createElement("p");
    //modificando elementos html
    nombre.textContent = ob.name;
    img.src = ob.image;
    status.textContent = "status:";
    statusR.textContent = ob.status;
    if(ob.status==="Alive"){
        statusR.className="alive";
    }
    if(ob.status==="Dead"){
        statusR.className="dead";
    }
    if(ob.status==="unknown"){
        statusR.className="unknown";
    }
    
    species.textContent ="species:";
    speciesR.textContent =ob.species;
    gender.textContent ="gender:";
    genderR.textContent =ob.gender;
    //agregando clases
    personaje.className = "personaje";
    detalle.className = "informacion"
    //generando estructura
    personaje.appendChild(nombre);
    personaje.appendChild(img);
    detalle.appendChild(status);
    detalle.appendChild(statusR);
    detalle.appendChild(species);
    detalle.appendChild(speciesR);
    detalle.appendChild(gender);
    detalle.appendChild(genderR);
    personaje.appendChild(detalle);

    contenido.appendChild(personaje);
    console.log("agregado!");
}

function limpiarContenido(){
    contenido.innerHTML = "";
}

//falta terminar de implementar
function cargarApi(ruta=ruta_Api){
    fetch(ruta)
    .then(response=> response.json())
    .then(data =>{
        //rescatar siguiente direccion
        ruta_Siguiente = data.info.next;
        numeroMax= data.info.pages;
        //dibujar-personajes
        for (i of data.results){
            dibujarPersonaje(i);
        }
    })
    .catch(error =>{
        const mensaje = document.createElement("h3");
        mensaje.textContent="Error al cargar los datos.";
        limpiarContenido();
        contenido.appendChild(mensaje)        
    })
}

btn_siguiente.addEventListener('click',()=>{
    if(carga < numeroMax){
        console.log("boton siguiente precionado")
        cargarApi(ruta_Siguiente);
        carga++;
    }else{
        btn_siguiente.disabled = true;
        btn_siguiente.textContent = "No quedan mas personajes";
    }
    
    
})
window.onload = function(){
    console.log("termino de cargar la pagina"); 
    limpiarContenido();   
    cargarApi();
}