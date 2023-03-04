// Criando propriedades de um objeto
const objeto = {
    nome: "Reunilson",
    idade: 29,
    altura: 1.77,
    cnh: true,
    apelidos: ["Nilson", "Bily", "Apelido Correto"]
};

const texto = objeto.cnh ? "possui CNH" : "não possui CNH";

console.log(`${objeto.nome} tem ${objeto.idade}, ${objeto.altura}m de altura, ${texto} e os seguintes apelidos:
 - ${objeto.apelidos[0]}
 - ${objeto.apelidos[1]}`);

//Melhorando o cód

console.log(`${objeto.nome} tem ${objeto.idade}, ${objeto.altura}m de altura, ${texto} e os seguintes apelidos:`)
for (let apelido of objeto.apelidos) {
    console.log(apelido)
};