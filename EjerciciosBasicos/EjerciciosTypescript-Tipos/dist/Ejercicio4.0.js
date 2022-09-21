"use strict";
function doStuff(value) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase().split('').join(' '));
    }
    else if (typeof value === 'number') {
        console.log(value.toPrecision(5));
    }
    value; // coloque el cursor sobre `valor` aqui
    //devuelve value (doStuff: void)
}
doStuff(2);
doStuff(22);
doStuff(222);
console.log("Que pasa si paso un numero con + de 5 cifras? ");
doStuff(222222);
doStuff('hello');
doStuff(true);
doStuff({});
console.log('[Ejercicio 4.1]');
