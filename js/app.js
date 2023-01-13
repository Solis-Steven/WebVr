import { sistema } from "./planetas.js";
const entidadAnimacion = document.querySelector("#entidadAnimacion");

document.addEventListener('DOMContentLoaded', cargarPlanetas);

function cargarPlanetas() {

    let entidadPadre = document.createElement("a-entity");
    let html = ``;
    sistema.forEach( planeta => {

        html += `
        <a-entity geometry="primitive: sphere; radius:25;"  
                  position="${planeta.posicionX} 0 -200" 
                  material="shader: flat; src: #${planeta.nombre};"
                  animation="property: rotation; dur: 3000; to: 0 360 0; easing: linear; loop: true">
        </a-entity> 
        `
    } );
    entidadPadre.innerHTML = html;
    entidadAnimacion.appendChild(entidadPadre);
}



