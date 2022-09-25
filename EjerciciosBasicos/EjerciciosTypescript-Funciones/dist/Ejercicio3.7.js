"use strict";
var numberCollection = [];
var stringCollection = [];
function pushToCollection(item, collection) {
    collection.push(item);
    return collection;
}
// Anadir algunas cosas a las colecciones
//pushToCollection(false, stringCollection); Valor incorrecto para su collecion
pushToCollection('hi', stringCollection);
//pushToCollection([], stringCollection); Valor incorrecto para su collecion
//pushToCollection('1', numberCollection); La funcion generica no va a tomarlas pq son de distinto tipo
//pushToCollection('2', numberCollection); 
//pushToCollection('3', numberCollection);
pushToCollection(1, numberCollection); //Valores correctos correspondientes a sus coleeciones
pushToCollection(2, numberCollection);
pushToCollection(3, numberCollection);
var incrementedByTwo = numberCollection.map(function (num) { return num + 2; });
console.log('[Ejercicio 3.7]', "[" + incrementedByTwo + "] debe ser igual a [3,4,5]");
/*
Actualmente, nuestra función ‘pushToCollection‘ acepta *cualquier* elemento y lo agrega, (indiscriminadamente)
a *cualquier* tipo de matriz.
Un par de problemas con esto:
1 El tipo ‘any‘ hace que perdamos toda la información de tipos en nuestros parámetros.
2 Esta holgura se ha vuelto en nuestra contra durante el tiempo de ejecución (mira a ‘incrementByTwo‘)


1 Implementar ‘pushToCollection‘ como una función genérica. (Esto debería crear errores
en tiempo de compilación en lugares donde se agregan valores incorrectos a una colección
determinada. Fije estos valores a los tipos correctos)
2 Una vez hecho genérico, ‘pushToCollection‘ debe ser suficientemente *generic* para operar
en artículos y colecciones de cualquier tipo mientras se continúa aplicando que conicidan */ 
