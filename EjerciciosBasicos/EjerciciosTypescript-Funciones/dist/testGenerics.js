"use strict";
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
myNumArr.push(400);
myStrArr.push('Hello TypeScript');
//myNumArr.push('Hi'); //distinto tipo en la funcion
//myStrArr.push(500);
