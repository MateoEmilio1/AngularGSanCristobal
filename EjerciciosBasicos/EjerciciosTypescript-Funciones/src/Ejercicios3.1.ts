function add(x: number, y:number): number {
    return x + y;
}
    
function sumArray(numbers: string[]): number {
    
const arrOfNum = numbers.map(str => {   //convierto el array de strings en array de number
    return Number(str);
});

/* The function we passed to the Array.map method gets called with each element (string) in the array.

On each iteration, we convert the string to a number and return the result.

The map method returns a new array that contains the values that the function returned, in our case all of the numbers. */

    return arrOfNum.reduce(add, 0);
}

const someSum = sumArray(['3', '6', '9']);
const someSuma = sumArray(['4', '8', '2']);

console.log('[Ejercicio 3.1]', `3 + 6 + 9 === ${someSum} \n `,
                                `4 + 8 + 2 === ${someSuma} ` );

// Agregue tipos explícitos a los parámetros y el tipo de retorno
// Solucione cualquier error resultante de tipos inválidos