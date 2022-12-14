function padLeft(value: string, padding: number | string): any {
// si padding es un numero, return `${Array(padding + 1).join(' ')}${value}`
// si padding es una cadena, return padding + value

if (typeof padding === "number"){
    return `${Array(padding + 1).join(' ')}${value}`
}
else if (typeof padding === "string")
{
    return padding + value
}

}

console.log('[Ejercicio 4.2]', `
${padLeft('', 0)}
${padLeft('a', 1)}
${padLeft('e', 'a') }
${padLeft('i', 2)}
${padLeft('o', 'b')}
${padLeft('u', 3)}
`);