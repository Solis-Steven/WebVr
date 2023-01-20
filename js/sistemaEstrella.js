import { estrellas } from "./estrellas.js";



AFRAME.registerComponent("shootable", {
    init: function() {
        this.el.addEventListener("click", () => {
            
            const siguiente = parseInt(this.el.getAttribute("value"));
            const { geometria, material, posicionZ, valor, radio } = estrellas[siguiente];

            this.el.setAttribute("geometry", {primitive: geometria, radius: radio});
            this.el.setAttribute("material", {src: material});
            this.el.setAttribute("value", valor);
            this.el.object3D.position.set( 15, 0, -25);

            document.querySelector("#textoEstrella").setAttribute("value", estrellas[siguiente].texto);
        });
    }
});