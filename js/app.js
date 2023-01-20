import { sistema } from "./planetas.js";     
const escena = document.querySelector("#escena");

document.addEventListener('DOMContentLoaded', cargarPlanetas);

// Escena de Steven
function cargarPlanetas() {

    
    sistema.forEach( planeta => {
        /* Se crea una entidad y se agregan los atributos correspondientes
        para que haya una animacion alrededor de la persona */
        const entidadAnimacion = document.createElement("a-entity");
        entidadAnimacion.setAttribute("id", planeta.orbita);
        entidadAnimacion.object3D.position.set(0, 3, 0);
        entidadAnimacion.object3D.rotation.set(0, 0, 0);
        entidadAnimacion.setAttribute("animation", { property: "rotation", dur: `${planeta.duracion}`, to: "0 360 0", loop: true });

        /* Se crea la entidad que corresponde a cada planeta y se agregan 
        los atributos correspondientes para que aparezcan en la escena */
        let entidad = document.createElement("a-entity");
        entidad.setAttribute("geometry", { primitive: "sphere", radius: 2 });
        entidad.setAttribute("material", { shader: "flat", src: `#${planeta.nombre}` });
        entidad.setAttribute("class", "planeta");
        entidad.setAttribute("animation", { property: "rotation", dur: "3000", to: "0 360 0", easing: "linear", loop: true });
        entidad.object3D.position.set( 0, 0, planeta.posicionZ);
        entidad.setAttribute("shootable", "")
        entidad.setAttribute("value", `${planeta.descripcion}`)
        

        entidadAnimacion.appendChild( entidad ); // Se pone el planeta a "orbitar"
        escena.appendChild( entidadAnimacion ); // Se agrega el planeta a la escena
    } );
}

AFRAME.registerComponent("shootable", {
    init: function() {
        this.el.addEventListener("click", () => {
            document.querySelector("[text]").setAttribute("value", this.el.getAttribute("value"));
        });
    }
});