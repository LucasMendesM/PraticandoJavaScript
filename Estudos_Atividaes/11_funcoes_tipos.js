//Variáveis criadas dentro de uma função apenas podem ser utilizadas dentro dela.

//Declarando uma Função:
function numeroPositivo(num) {
    let resultado;

    if (num < 0) {
        resultado = false;
    } else {
        resultado = true;
    }
    
    return resultado;
} //Função verificando se um número está ou não abaixo de zero.



//Estrutura de uma função abaixo:
function nomeDaFuncao (parametrosDaFuncao) {
    //Instruções da Função, entre os { }.
}



//Utilizando o return em funcoes abaixo:
function nomeDaFuncao (parametrosDaFuncao) {
    //Instruções da Função, entre os { }.
    return; //Valor de Retorno da Função.
}
//Ao invocar o return.. A função para de ser executada.



//Função Anônima. (Uma variavel pode armazenar uma função):
const soma = function (a, b) {
    return a + b
}
soma(1, 2) //3
soma(10, 3) //13



//Função Autoinvocável.. Declarada dentro de ()
(
    function() {
        let name = "meuNome"
        return meuNome
    }
)(); //Este parêntese representa a chamada da função.

//Exemplo de Função Autoinvocável:
(
    function(a, b) {
        return a + b;
    }
)(1, 2); //Neste caso retorna 3.