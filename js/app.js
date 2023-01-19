import { sistema } from "./planetas.js";     


document.addEventListener('DOMContentLoaded', cargarPlanetas);


function cargarPlanetas() {

    // let entidadPadre = document.createElement("a-entity");
    // let html = ``;
    // sistema.forEach( planeta => {

    //     html += `
    //     <a-entity geometry="primitive: sphere; radius:25;"  
    //               position="${planeta.posicionX} 0 -200" 
    //               material="shader: flat; src: #${planeta.nombre};"
    //               animation="property: rotation; dur: 3000; to: 0 360 0; easing: linear; loop: true">
    //     </a-entity> 
    //     `
    // } );
    // entidadPadre.innerHTML = html;
    // entidadAnimacion.appendChild(entidadPadre);

    const escena = document.querySelector("#escena")

    
    sistema.forEach( planeta => {
        const entidadAnimacion = document.querySelector(`#${planeta.orbita}`)

        let entidad = document.createElement("a-entity");
        entidad.setAttribute("geometry", { primitive: "sphere", radius: 2 });
        entidad.setAttribute("material", { shader: "flat", src: `#${planeta.nombre}` });
        entidad.setAttribute("animation", { property: "rotation", dur: "3000", to: "0 360 0", easing: "linear", loop: true });
        entidad.object3D.position.set( 0, 0, planeta.posicionZ);
        entidad.setAttribute("shootable", "")
        entidad.setAttribute("value", `${planeta.descripcion}`)
        
        entidadAnimacion.appendChild( entidad );
    } );
}

AFRAME.registerComponent("shootable", {
    init: function() {
        this.el.addEventListener("click", () => {
            document.querySelector("[text]").setAttribute("value", this.el.getAttribute("value"));
        });
    }
});