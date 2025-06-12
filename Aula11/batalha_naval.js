const prompt = require('prompt-sync')();

//Criar uma matriz 5x5 preenchida com "O" (água)

let tabuleiro = [
    ['O', 'O', 'O', 'O','O'],
    ['O', 'O', 'O', 'O','O'],
    ['O', 'O', 'O', 'O','O'],
    ['O', 'O', 'O', 'O','O'],
    ['O', 'O', 'O', 'O','O'],
]

    //Sortear a posição dos navios
const navioLinha = Math.floor(Math.random() * 5);
const navioColuna = Math.floor(Math.random() * 5);

  //Mostrar o tabuleiro
function mostrarTabuleiro(){
    console.log('\nTabuleiro:');
    tabuleiro.forEach(linha => console.log(linha.join(' ')));
    console.log('');
}

//Valida se a posição(linha e coluna) que o jogador escolheu é válida
function posicaoValida(linha, coluna){
    return linha >= 0 && linha < 5 && coluna >= 0 && coluna < 5;
}

//Jogador terá 5 tentativas
let tentativas = 5;
let venceu = false;

while( tentativas > 0){
    mostrarTabuleiro();
    console.log(`Você tem ${tentativas} tentativas restantes`);

    let linha = Number(prompt('Escolha uma linha(0 a 4)'));
    let coluna = Number(prompt('Escolha uma coluna de (0 a 4)'));

    if(!posicaoValida(linha, coluna)){
        console.log('Posição inválida! Tente Novamente');
        continue;
    }

    if(linha === navioLinha && coluna === navioColuna){
        tabuleiro[linha][coluna] = 'X'; //Usuário acertou um navio
        mostrarTabuleiro();
        console.log("Parabéns você acertou um navio");
        venceu = true;
        break;
    }  else {
        //Usuário errou o navio;
        if(tabuleiro[linha][coluna] === "-"){
            console.log("Você já tentou essa posição");
        }else{
            tabuleiro[linha][coluna] = "-";
            console.log("Nenhum navio acertado, tente novamente!");
            tentativas--;
        }
    }
    
}