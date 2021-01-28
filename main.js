// Operador de comparación **Igualdad**
let a = 50;
let b = 100;
console.log(`Operador de comparación **Igualdad** ${a==b}`);

// Utilización de este operador ejemplo: verificar contraseñas
// Operador diferente
let c = 50;
let d = 100;
console.log(`Operador diferente  ${c!=d}`);


// Operador identidad
let e = 100;
let f = 100;
// Válida el tipo del dato y el valor del dato
// Si ambos son iguales arroja true
console.log(`Tipo de dato variable a ${typeof (e)} valor del dato ${e}`);
console.log(`Tipo de dato variable b ${typeof (f)} valor del dato ${f}`);
console.log(`Resultado de la comparación ${e===f}`);


// Operador diferencia
let g = "100";
let h = 50;
// válida el tipo del dato y el valor del dato para hallar la diferencia. 
//Si son diferentes arroja true. Si son iguales arroja false
console.log(`Tipo de dato variable a ${typeof (g)} valor del dato ${g}`);
console.log(`Tipo de dato variable b ${typeof (h)} valor del dato ${h}`);
console.log(`Resultado de la comparación ${g!==h}`);


// Operador diferencia Mayor
let i = 100;
let j = 50;
console.log(`Valor del dato ${i}`);
console.log(`Valor del dato ${j}`);
console.log(`'Operador Mayor' en numero ${i} es mayor que ${j} ${i>j}`)


// Operador diferencia Mayor o igual
let k = 100;
let l = 50;
console.log(`Valor del dato ${k}`);
console.log(`Valor del dato ${l}`);
console.log(`'Operador Mayor o igual' en numero ${k} es mayor o igual que ${l} ${k>l}`)

// Operador diferencia menor
let m = 100;
let n = 50;
console.log(`'Operador menor en número' ${m} es menor que ${n} ${m<n}`)

// Operador diferencia menor o igual
let o = 50;
let p = 100;
console.log(`'Operador menor o igual en número' ${o} es menor o igual que ${p} ${o=<p}`)
