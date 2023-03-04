

const comanda = {
    nome: "Nilson",
    idade: 29,
    produtos: [
        vodka = { marca: "Absolutt", preço: 5000, qtd: 1 },
        cigarro = { marca: "Mallboro", preço: 1000, qtd: 2 },
        cerveja = { marca: "Spaten", preço: 500, qtd: 5 }
    ]
};

comanda.idade = 30;
console.log(comanda.produtos[2].preço)

//exercicio 4

let valorTotal = 0;
for (let produto of comanda.produtos) {
    valorTotal += produto.qtd * produto.preço
};

console.log(`Sr. ${comanda.nome} o valor total da sua comanda è R$${valorTotal}. 
Agradecemos sua presença e volte sempre !`)