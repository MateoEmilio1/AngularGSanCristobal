"use strict";
var elementoInventario = ['tuerca', 11]; //especifico el tipo de elementos que se encuentra en cada posicion
// despues lo desestructuramos
var nombre = elementoInventario[0], cantidad = elementoInventario[1]; //uso elementoInventario para asignarle los valores a nombre y cantidad
var mensaje = agregarInventario(nombre, cantidad); /*paso como parametro nombre y cantidad, la funcion sabe que son de tipo string y number gracias a
                                                          que fue especificado en la declaracion de elementoInventario */
console.log('[Ejercicio 1.6]', mensaje);
function agregarInventario(nombre, cantidad) {
    return "Se agregaron " + cantidad + " " + nombre + "s al inventario.";
}
