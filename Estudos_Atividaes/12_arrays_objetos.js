//Para tornar valores de um array independentes e separados dentro de uma função use a técnica de SPREAD (Chamando o array com 3 pontos antes) Como no exemplo:
console.log( ...array)
//Para fazer o contrário e combinar elementos e transformar em um array use a técnica REST.



//Object Destructuring é uma funcionalidade que fragmenta um dado maior em vários outros menores, como no exemplo abaixo:
const fullName = {
    firstName = "João" ,
    lastName = "Lucas"
}

function getFullName({FullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
} //Object Destructuring usado na const para poder utilisar seus dados separadamentes porteriormente.