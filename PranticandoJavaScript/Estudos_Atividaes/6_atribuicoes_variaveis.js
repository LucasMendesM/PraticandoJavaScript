//A seguir, várias forma de atribuir valores a uma variável.

//var x = 10 //Diz que x tem o valor de 10

//var x += y //Diz que x tem o valor de x + y 

//var x *= y //Diz que x tem o valor de x * y 

//var x /= y //Diz que x tem o valor de x / y

//var x %= y //Diz que x tem o valor de x % y . . .  O MOD ou % retorna o resta entre a divisão de dois números 

//..............................................................................................

/*
Tipos de cases (Nomeação de Variáveis)

- Camel Case : nomeDeVariavel
- Snake Case : nome_de_variavel
- Kebab Case : nome-de-variavel
- Upper Snake Case : NOME_DE_VARIAVEL (Normalmente utilizada para declarar Constantes)
*/

//..............................................................................................

/* 
A declaração com let tem escopo de bloco. (Quando declarado como var fora do bloco, e declarado dentro do bloco como let, ao sair do bloco a variável volta ao valor declarado no var antes do bloco... veja o exemplo abaixo.)
*/
var a = 1;
var b = 2;

if (a===1) {
    var a = 11 //Escopo Global
    let b = 22 //Escopo de Bloco (O let altera o valor desta variável somente dentro do Bloco.)
}

console.log (a); //Imprime 11
console.log (b); //Imprime 2

//..............................................................................................

/* 
Constantes tem escopo global e não podem ser altradas posteriormente, e é interessante declara-las com Upper Snake Case como no exemplo abaixo:
*/

const FIRST_NAME = "João";

//..............................................................................................

