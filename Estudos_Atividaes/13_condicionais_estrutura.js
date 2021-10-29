//IF/ELSE é a famosa estrutura do Sim e SeNão.
if (condição1) {
    instrucao1;
} else if (condição2) {
    instrucao2;
} else {
    condição3;
}
//Exemplo Real:
if (num < 0) {
    resultado = false;
} else {
    resultado = true;
} //Função verificando se um número está ou não abaixo de zero.



//SWITCH/CASE é a estrutura de Caso e OutroCaso.
switch(traducaoCores) {
    case red :
        return "Vermelho";
    case blue :
        return "Azul" 
    default :
        return "Não é uma Cor"       
} //Default representa o último caso, tudo aquilo ques está fora das condições já passadas anteriormente.