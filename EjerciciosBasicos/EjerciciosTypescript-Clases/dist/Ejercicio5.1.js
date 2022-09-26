"use strict";
var MC = /** @class */ (function () {
    function MC() {
    }
    MC.prototype.greet = function (event) {
        if (event === void 0) { event = 'party'; }
        return "Bienvenido al " + event;
    };
    return MC;
}());
var mc = new MC();
console.log('[Ejercicio 5.1]', mc.greet('espectaculo'));
