
const cidade = "Salvador-BA";
const indice = cidade.indexOf('-')

console.log(cidade.slice(indice + 1))

let forma1 = cidade.slice(cidade.length - 2) //FORMA DIRETA
console.log(forma1)
//REPLACE

const numero = '97.50';
const numeroBR = numero.replace('.', ',') //faz uma copia
console.log(numeroBR) //ocorre a substituição apenas uma vez

//PARA APLICAR MAIS DE UMA VEZ:
let n = '1.000.000.00';

function corrigir(variavel, text, newText) {
    while (variavel !== variavel.replace(text, newText)) {
        variavel = variavel.replace(text, newText)
    }
    return variavel
}

console.log(corrigir(n, '.', ','))
//METODO PAD
var cartão = "2305"
var cartaoCresito = cartão.padStart(11, "0101")
//console.log(cartaoCresito)

//padStrat só funciona para STRING 
function imprimirData(dia, mes, ano) {
    let diaFormat = String(dia).padStart(2, '0')
    let mesFormat = `${mes}` // tambem poderia por direto `${mes}`.padStart()
    console.log(`${diaFormat}/${mesFormat.padStart(2, '0')}/${ano}`)
}


imprimirData(1, 2, 1993)
//exercico INICIAIS EM MAIUSCULO

const nome = 'reunilson barbosa da silva'

function corrigindoNome(nome) {
    let nomeArray = nome.split(' ')
    let nomeOk = ''
    for (let name of nomeArray) {
        nomeOk += `${name[0].toLocaleUpperCase()}${name.slice(1)} `
    };
    console.log(nomeOk)
}

corrigindoNome(nome)



