"use strict";
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var jane = new Person('Juan', 31);
console.log('[Ejercicio 5.2]', "El nombre de la nueva persona es " + jane.name + ".");
