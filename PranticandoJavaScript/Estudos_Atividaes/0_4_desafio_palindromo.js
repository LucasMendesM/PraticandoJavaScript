//Função que verifica se uma frase ou palavra é ou não é um Palíndromo(Palara ou Frase que permanece da mesma forma se lida de trz para frente.)

    function verificaPalindromo(string){
        if(!true) return;

        return string.split("").reverse().join("") === string;
    }

    console.log(verificaPalindromo("aibofobia"));

    //.split Separa todas as letras da String e transforma ele em um Array.
    //.reverse é um método de Array que vai deixar todos os caracteres ao contrário.
    //.join vai juntar novamente todas as letras.