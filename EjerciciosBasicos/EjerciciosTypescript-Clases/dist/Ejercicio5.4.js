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
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this._name = "";
        this._name = nombre;
    }
    Object.defineProperty(Animal.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Animal.prototype.move = function (meters) {
        console.log(this._name + " se movio " + meters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.move = function (meters) {
        console.log('Deslizandose...');
        // debe invocar al metodo `move` del padre, con un deslizamiento predeterminado
        // de 5 metros
        if (meters != null) {
            _super.prototype.move.call(this, meters);
        }
        else {
            _super.prototype.move.call(this, 5);
        }
    };
    return Snake;
}(Animal));
var Pony = /** @class */ (function (_super) {
    __extends(Pony, _super);
    function Pony() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pony.prototype.move = function (meters) {
        console.log('Galopando...');
        // debe invocar al metodo `move` del padre con un galope predeterminado
        // de 60 metros
        if (meters != null) {
            _super.prototype.move.call(this, meters);
        }
        else {
            _super.prototype.move.call(this, 60);
        }
    };
    return Pony;
}(Animal));
// La clase Animal no debe ser instanciable.
// Eliminar o comentar una vez que se logra el error deseado.
//const andrew = new Animal("Andrew el Animal");
//andrew.move(5);
// --- SNAKE ----
var sammy = new Snake("Sammy la serpiente");
sammy.move();
sammy.move(3);
console.log('Nombre: ' + sammy.name);
// --- PONY ---
var pokey = new Pony("Pokey el pony");
pokey.move();
pokey.move(34);
console.log('Nombre: ' + pokey.name);
// 1 Añadir tipos
// 2 Hacer que la clase Snake herede de Animal
// 2 Hacer que la clase Pony herede Animal
// 2 Hacer que el miembro del nombre no pueda ser accedido públicamente
