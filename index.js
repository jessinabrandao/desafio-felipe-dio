let nome = "Jéssina"
let xp = 24
const mensagem = "você está na liga"

if (xp <= 1000){
    console.log( nome + " " + mensagem + " "+ "Ferro")
}

else if (xp >= 1001 && xp <= 2000){
    console.log(nome + " " + mensagem+ " " + "Bronze")
}

else if (xp >= 2001 && xp <= 5000){
    console.log(nome +" "+ mensagem+ " " + "Prata Ouro")
}
else if (xp >= 5001 && xp <=8000){
    console.log(nome + " " + mensagem + " " + "Platina Diamante")
}
else if (xp >= 9001 && xp <= 9000){
    console.log(nome + " " + mensagem + " " + "Ascendente")
}
else if (xp >= 9001 && xp <= 10000){
    console.log(nome + " " + mensagem + " " + "Imortal")
}
else if (xp >= 10001){
    console.log(nome + " " + mensagem + " " + "Radiante")
}