let a = 7;
let b = 94;
let troca = null;

// Depois da troca.. Deverá a=94 & b=7 ;

troca = a;
a = b;
b = troca;

console.log(a)
console.log(b)

// Uma forma mais moderna de fazer essa troca de valores seria utilizando o código abaixo:

[a, b] = [b, a]
