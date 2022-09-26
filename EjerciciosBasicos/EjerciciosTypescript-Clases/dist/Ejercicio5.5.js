"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Furniture = /** @class */ (function () {
    function Furniture() {
        this._manufacturer = 'IKEA';
    }
    Object.defineProperty(Furniture.prototype, "manufacturer", {
        get: function () {
            return this._manufacturer;
        },
        enumerable: true,
        configurable: true
    });
    return Furniture;
}());
var Desk = /** @class */ (function (_super) {
    __extends(Desk, _super);
    function Desk() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Desk.prototype.kind = function () {
        console.log('[Ejercicio 5.5]', "Este es un escritorio hecho por " + this.manufacturer);
    };
    return Desk;
}(Furniture));
var Chair = /** @class */ (function (_super) {
    __extends(Chair, _super);
    function Chair() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chair.prototype.kind = function () {
        console.log('[Ejercicio 5.5]', "Esta es una silla hecha por " + this.manufacturer);
    };
    return Chair;
}(Furniture));
var desk = new Desk();
desk.kind();
console.log(desk.manufacturer);
var chair = new Chair();
chair.kind();
console.log(chair.manufacturer);
//    1 Hacer que solo las clases Desk y Chair puedan ver el miembro del fabricante
