// Arrow Functions permitem escrever uma sintaxe de função mais curta (Não faz hoisting):

// Antes:
const hello = function(a) {
    return "Hello World!";
  }

// Com Arrow Function:
const hello = (a) => {
    return "Hello World!";
  }

  // E fica mais curto! Se a função tiver apenas uma linha, podendo dispensar as chaves e o return.. Caso exista só um parametro pode dispensar também o ()
  const hello = a => "Hello World!";