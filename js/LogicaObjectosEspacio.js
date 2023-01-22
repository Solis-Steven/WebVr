import { ObjetosEspaciales } from "./ObjetosEspacio.js";     
const escena = document.querySelector("#escenaObjectosEspacio");

document.addEventListener('DOMContentLoaded', cargarObjectos);

function cargarObjectos() {

    
    ObjetosEspaciales.forEach( objectosEspacio => {
        const entidadAnimacion = document.createElement("a-entity");
        entidadAnimacion.setAttribute("id", objectosEspacio.orbita);
        entidadAnimacion.object3D.position.set(0, 3, 0);
        entidadAnimacion.object3D.rotation.set(0, 0, 0);
        entidadAnimacion.setAttribute("animation", { property: "rotation", dur: `${objectosEspacio.duracionOrbita}`, to: "0 360 0", loop: true });
        let entidad = document.createElement("a-entity");
        entidad.setAttribute("geometry", { primitive: "sphere", radius: objectosEspacio.tamaño });
        entidad.setAttribute("material", { shader: "flat", src: `#${objectosEspacio.nombre}` });
        entidad.setAttribute("class", "objectosEspacio");
        entidad.setAttribute("animation", { property: "rotation", dur: objectosEspacio.duracionRotacion, to: `${objectosEspacio.rotacionx}`+ " " + `${objectosEspacio.rotaciony}`+ " "  + `${objectosEspacio.rotacionz}`, easing: "linear", loop: true });
        entidad.object3D.position.set( objectosEspacio.posicionx, objectosEspacio.posiciony, objectosEspacio.posicionZ);
        entidad.setAttribute("shootable", "")
        entidad.setAttribute("value", `${objectosEspacio.descripcion}`)
        entidadAnimacion.appendChild( entidad ); 
        escena.appendChild(entidadAnimacion); 
    } );
}

AFRAME.registerComponent("shootable", {
    init: function() {
        this.el.addEventListener("click", () => {
            document.querySelector("[text]").setAttribute("value", this.el.getAttribute("value"));
        });
    }
});