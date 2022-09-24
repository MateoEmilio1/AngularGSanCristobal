"use strict";
function padLeft(value, padding) {
    // si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
    // si padding es una cadena, return padding + value
    if (typeof padding === "number") {
        return "" + Array(padding + 1).join(' ') + value;
    }
    else if (typeof padding === "string") {
        return padding + value;
    }
}
console.log('[Ejercicio 4.2]', "\n" + padLeft('', 0) + "\n" + padLeft('', '') + "\n" + padLeft('', '') + "\n" + padLeft('', '') + "\n" + padLeft('', '') + "\n");
