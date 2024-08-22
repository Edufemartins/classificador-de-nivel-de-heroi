// Crie uma variavel para armazenar o nome e a quantidade de Experiência (XP) de um herói, 
//depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo.
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
//Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**"



let nomeHeroi = "Eduardo"
let experiencia = 999

if(experiencia < 1000){
    console.log("O Herói de nome " + nomeHeroi + " esta no nível Ferro");
}
else if(experiencia > 1001 && 2000)
    {
    console.log("O Herói de nome " + nomeHeroi + " esta no nível Bronze");
}
else( experiencia > 2001 && 5000)
{
    console.log("O Herói de nome " + nomeHeroi + " esta no nível Prata");
}