//Para una palabra dada, calculamos su puntuación en Scrabble®

function computeScore(word: string) {
    const letters = word.toUpperCase().split('');
return letters.reduce((accum: number, curr:string) => accum += getPointsFor(curr), 0);
}

function getPointsFor(letter: string):number {

const lettersAndPoints:[string,number][] = [

['AEOIULNRST', 1],
['DG', 2],
['BCMP', 3],
['FHVWY', 4],
['K', 5],
['JX', 8],
['QZ', 10],
];

return lettersAndPoints.reduce((computedScore, pointsTuple) => { //En la tupla de puntos ubico letters y score (string y number)
    const [letters, score] = pointsTuple;

    if (letters.split('').find((ll: string) => ll === letter)) { 
    //metodo split (separar/dividir): is used to splits a String object into an array of strings by separating the string into sub-strings.
    return computedScore += score;
    }

    return computedScore;
    }, 0);

}

console.log('[Ejercicio 3.3]', `zoologico vale ${computeScore('zoo')} puntos.`);
// Añadir anotaciones de tipo siempre que sea posible