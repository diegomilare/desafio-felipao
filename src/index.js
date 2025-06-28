let nome = "Andrômeda"
let xp = 0 //O jogador começa com 0xp
let nivel = "" //Apenas para inicializar a variável
let gameHoras = 0 //Inicio no jogo as 00:00
let gameMinutos = 0 //Inicio no jogo as 00:00
let xpPorMinuto = 8 //Cada minuto no jogo vale 8xp

console.log("")
console.log("Iniciando a jornada")
console.log(nome + " entrou no servidor. Horas: 00:00")
console.log("")

for(let minutos = 0; minutos <= 1440; minutos++) {
    if(minutos%60 === 0) {
        gameHoras = minutos/60
        if(gameHoras < 10) {
            gameHoras = "0" + gameHoras
        }
    }

    gameMinutos = minutos%60

    if(gameMinutos < 10 ) {
        gameMinutos = "0" + gameMinutos
    }

    switch(minutos) {
        case 35:
            xp += (minutos * xpPorMinuto)
            console.log(gameHoras + ":" + gameMinutos +
                " --- Derrotou um inimigo comum --- +" +
                (minutos * xpPorMinuto) +
                "xp --- Total: " + (xp) + "xp")
            break
        
        case 212:
            xp += (minutos * xpPorMinuto)
            console.log(gameHoras + ":" + gameMinutos +
                " --- Completou uma missão secundária --- +" +
                (minutos * xpPorMinuto) +
                "xp --- Total: " + (xp) + "xp")
            break
        
        case 437:
            xp += (minutos * xpPorMinuto)
            console.log(gameHoras + ":" + gameMinutos +
                " --- Achou um item raro escondido --- +" +
                (minutos * xpPorMinuto) +
                "xp --- Total: " + (xp) + "xp")
            break

        case 871:
            xp += (minutos * xpPorMinuto)
            console.log(gameHoras + ":" + gameMinutos +
                " --- Venceu o chefão final --- +" +
                (minutos * xpPorMinuto) +
                "xp --- Total: " + (xp) + "xp")
            break
    }

    if(xp <= 1000) {
    nivel = "Ferro"
    }

    else if(xp <= 2000) {
        nivel = "Bronze"
    }

    else if(xp <= 5000) {
        nivel = "Prata"
    }

    else if(xp <= 7000) {
        nivel = "Ouro"
    }

    else if(xp <= 8000) {
        nivel = "Platina"
    }

    else if(xp <= 9000) {
        nivel = "Ascendente"
    }

    else if(xp <= 10000) {
        nivel = "Imortal"
    }

    else {
        nivel = "Radiante"
    }
}

console.log("")
console.log("O herói de nome " + nome + " está no nível " + nivel)