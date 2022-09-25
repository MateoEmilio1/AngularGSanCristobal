"use strict";
function layEggs(quantity, color) {
    console.log("[Ejercicio 3.5] Acabas de poner " + quantity + " huevos " + color + ". Buen trabajo!");
    return {
        quantity: quantity,
        color: color
    };
}
var datos = layEggs(3, 'amarillos');
console.log(datos);
/*  1 - Añadir anotación de tipo de parámetro
    2 -  A pesar de que esta función no vuelve, agregue un tipo de retorno explícito */ 
