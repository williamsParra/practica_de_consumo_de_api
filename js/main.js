//capturando ubicacion de destino
const contenido = document.querySelector(".contenido");

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
    nombre.textContent = ob.nombre;
    img.src = ob.imagen;
    status.textContent = "status:";
    statusR.textContent = ob.status;
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

window.onload = function(){
    console.log("termino de cargar la pagina");
}