const numbers = [1, 2, 3, [44, 55], 6, [77, 88], 9, 10, 'test tipo String',[100],100];

function flatten<T>(array: T[]) {
 const flattened:T[] = []; //es necesario indicarle el tipo T[] para que se comporte usando el mismo tipo con el array

for (const element of array) { //funciona como foreach
    if (Array.isArray(element)) { //si es un array
    element; // any[]. Tipo T[]
    flattened.push(...element);
} else {                            //cualquier otro caso
    element; // any. Tipo T
    flattened.push(element);
}
}

return flattened;
}

const flattenedNumbers = flatten(numbers);

console.log('[Ejercicio 4.3]', flattenedNumbers);
//Añadir anotaciones de tipo (‘any‘ excluido)
//Inspeccione el tipo de ‘element‘ en diferentes ramas de código
// Bonificación: convertir ‘flatten‘ en una función genérica