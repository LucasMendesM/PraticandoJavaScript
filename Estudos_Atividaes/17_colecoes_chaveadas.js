//Map
//Set

/* MAP

Definição e Uso
O map()método cria uma nova matriz com os resultados da chamada de uma função para cada elemento da matriz.
A diferença entre map e objeto é que o map()não retorna um objeto, mas uma matriz.

O map()método chama a função fornecida uma vez para cada elemento em uma matriz, em ordem.

map() não executa a função para elementos vazios.

map() não altera a matriz original.
*/

//Multiplique todos os valores na matriz por 10:
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

/*SET

Set é uma coleção de elementos, sem valores duplicados.. São estruturas que armazenam apénas valores unicos
A dirferença de set e array é que set não aceita valores duplicados.
*/