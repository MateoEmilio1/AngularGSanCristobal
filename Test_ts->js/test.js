function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
myNumArr.push(400);
myStrArr.push('Hello TypeScript');
myNumArr.push('Hi');
myStrArr.push(500);
console.log(myNumArr);
console.log(myStrArr);
/*

comando: ( tsc [nombre_archivo].ts )
para que me genere [nombre_archivo].js

comando ( node [nombre_archivo].js ) para ejecutarlo (si es que estoy en la misma carpeta)
sino poner la direccion correcta.
 */ 
