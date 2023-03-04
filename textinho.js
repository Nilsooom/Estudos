const pessoa = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: "estudante"
};

function apresentacao(jovem) {
    console.log(`Olá, meu nome é ${jovem.nome}, sou um jovem de ${jovem.idade} anos,
${jovem.altura}m de altura e sou ${jovem.profissao}`)
};

apresentacao(pessoa)
// Exemplo 2

function faixaEtaria(idade) {
    if (idade <= 21) {
        return 'Sou jovem'
    } else if (idade <= 65) {
        return 'Sou adulto'
    } else {
        console.log('Sou idoso') // da no mesmo com a diferença que já imprime.
    }
};

faixaEtaria(80)
// Exercicio // exemplo de utilização de função
const pessoa1 = {
    nome: "Roberta",
    idade: 19,
    profissão: "Musicista"
};
const pessoa2 = {
    nome: "Nilson",
    idade: 29,
    profissão: "Programador"
};
const pessoa3 = {
    nome: "Rayssa",
    idade: 22,
    profissão: "Gostosa"
};

function apresentar(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Oi, meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissão}!`)
    } else if (pessoa.idade < 65) {
        console.log(`Oi, meu nome é ${pessoa.nome}, sou um(a) adulto de ${pessoa.idade} anos e sou ${pessoa.profissão}!`)
    } else {
        console.log(`Oi, meu nome é ${pessoa.nome}, sou um(a) idoso de ${pessoa.idade} anos e sou ${pessoa.profissão}!`)
    }
};

apresentar(pessoa3);
//FUNÇÃO QUE CHAMA OUTRA FUNÇÃO
function apresentacao(jovem) {
    console.log(`Olá, meu nome é ${jovem.nome}, sou um ${texto(pessoa)} de ${jovem.idade} anos,
${jovem.altura}m de altura e sou ${jovem.profissao}`)
};

function texto(i) {
    if (i.idade < 18) {
        return "jovem"
    }
}