"use strict";
var Usuario = /** @class */ (function () {
    function Usuario(nombre, id) {
        this.nombre = nombre;
        this.id = id;
    }
    return Usuario;
}());
var usuario = new Usuario('Perro', 1);
console.log(usuario.id); // legible
usuario.nombre = 'Harold'; // asignable
// usuario.id = 5; // no asignable, no se puede modificar la variable
console.log('[Ejercicio 2.4]', "Usuario:", usuario);
