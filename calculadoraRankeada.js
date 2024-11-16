
function calculadoraRankeada(vitorias, derrotas){
    return vitorias - derrotas;
}

function verificaPatente(saldo){
    let patente = " ";
        if (saldo <= 10){
           patente = "Ferro";
        }else if(saldo > 10 && saldo <= 20){
           patente = "Bronze";
        }else if(saldo > 20 && saldo<=50){
            patente = "prata";
        }else if(saldo> 50 && saldo<=80){
            patente = "ouro";
        }else if(saldo> 80 && saldo<=90){
            patente = "diamante";
        }else if(saldo> 80 && saldo<= 100){
           patente = "lendário";
        }else{
            patente = "imortal";
        }
    return patente;
}

let calculoRankeada = calculadoraRankeada(20, 10);
console.log(`O saldo de rankeada é ${calculoRankeada}`);

let verificandoPatente = verificaPatente(30);
console.log("O jogador está na patente " + verificandoPatente);
