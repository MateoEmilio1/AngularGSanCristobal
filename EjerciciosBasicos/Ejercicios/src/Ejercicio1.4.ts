

const entero = 6;
const decimal = 6.66;
const hexadecimal = 0xf00d;
const binario = 0b1010011010;
const octal = 0o744;
const ceroNegativo = -0;
const enRealiadadNumero = NaN;
const mayorNumero = Number.MAX_VALUE;
const elNumeroMasGrande = Infinity;

const miembros: any[] = [
entero,
decimal,
hexadecimal,
binario,
octal,
ceroNegativo,
enRealiadadNumero,
mayorNumero,
elNumeroMasGrande
];

miembros[0] = '12345'; //reemplazo la primer posicion donde esta la const entero= 6 por '12345'

console.log('[Ejercicio 1.4]', miembros); //imprime el contenido de todos los elementos de miembros