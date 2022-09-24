"use strict";
//Para una palabra dada, calculamos su puntuación en Scrabble®
function computeScore(word) {
    var letters = word.toUpperCase().split('');
    return letters.reduce(function (accum, curr) { return accum += getPointsFor(curr); }, 0);
}
function getPointsFor(letter) {
    var lettersAndPoints = [
        ['AEOIULNRST', 1],
        ['DG', 2],
        ['BCMP', 3],
        ['FHVWY', 4],
        ['K', 5],
        ['JX', 8],
        ['QZ', 10],
    ];
    return lettersAndPoints.reduce(function (computedScore, pointsTuple) {
        var letters = pointsTuple[0], score = pointsTuple[1];
        if (letters.split('').find(function (ll) { return ll === letter; })) {
            //metodo split (separar/dividir): is used to splits a String object into an array of strings by separating the string into sub-strings.
            return computedScore += score;
        }
        return computedScore;
    }, 0);
}
console.log('[Ejercicio 3.3]', "zoologico vale " + computeScore('zoo') + " puntos.");
// Añadir anotaciones de tipo siempre que sea posible
