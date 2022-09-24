"use strict";
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    return Persona;
}());
var juan = new Persona('Juan', 31);
console.log('[Ejercicio 2.2]', juan.nombre + " tiene " + juan.edad + " anios.");
