const listaX = ['Beatriz', 'Roberta', 'Nanda', 'Tayna']

//Estrutura de repetição com uma condição

let indice = 0;
while (indice < listaX.length) {
    console.log(listaX[indice])
    indice++;
};
// FOR DE C - em outras linguagens
//forma mais comum de "for of" 

for (let i = 0; i < listaX.length; i++) {
    console.log(listaX[i])
};

///////////////////////////somar itens da array//////////
const exercicio = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];

let soma = 0;

for (let number = 0; number < exercicio.length; number++) {
    soma = soma + exercicio[number]
}
console.log(soma);

////////////////////////////  FOR OF // PERCORRE STRING
const nome = "Alemanha";
cubos = 0;

for (let letra of nome) {
    if (letra == "a" || letra == "A") {
        cubos++
    }
};
console.log(cubos);
