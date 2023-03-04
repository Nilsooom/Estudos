
const rato = ['a', 'b', 'c']
rato.indexOf('b') //RETORNA O INDICE DA PRIMEIRA OCORRENCIA

const raposa = ['a', 'b', 'c']
raposa.includes('b')//RETORNA O ITEM OU STRING//BOLEANO


const reverse = ['1', '2', '3', '4'] //REVERSE = ['d','c','b','a']
reverse.reverse()//INVERTE OS INTENS = OS ULTIMOS SERAM OS PRIMEIROS
console.log(reverse) // MODIFICA A ARRAY ORIGINAL

var copia = reverse.pop() //"COPIA" MODIFICA ORIGINAL !!!!
//POSSIBILIDADE DE MANIPULAR 2 ORIGINAIS NOMES DIFERENTES '-'
//IMPORTANTE SABER:
//SE ESTA CRIANDO UMA COPIA DA INFORMAÇÃO OU SE ESTA MANIPULANDO A ORIGINAL
//REFERENCIA:
//SIGNIFICA QUE ESTA MANIPULANDO A ORIGINAL!
//VARIAVEIS SAO COMO ATALHOS DE REFERENCIA P A ORIGINAL.
//EM METODOS QUE NAO MUTAM A ORIGINAL É NECESSARIO GURDAR O RETURN

//REVERSE SÓ FUNCIONA COM ARRAYS:
function inverter(string) {
    const texto = string.split('') //NAO MUTA ORIGINAL
    texto.reverse()
    let textoIvertido = texto.join('') // JUNTA TODOS INTENS EM UMA STRING // NAO MUTA
    console.log(textoIvertido)
}
inverter('Catraca') //IVERTE A STRING

const leao = ['a', 'b', 'c']
leao.join('#') //SE NÃO PASSAR ARGUMENTO SERA SEPARADO POR "," VIRGULA

const C1 = [1, 2]; C2 = [3, 4]; C3 = [5, 6];
let concatenar = C1.concat(C2, C3); //JUNTA VARIAS ARRAYS //NÃO MUTA

const jubart = ['Eu', 'Tu', 'Ele', 'Nós', 'Eles'] //NAO MUTA
let FATIA = jubart.slice(2, 3) // RECORTA UMA COPIA - SLICE(item1, item excluso)


jubart.splice() //(idice modificar, qnts indices,substituição)
//SPLICE = SERVE PARA TIRAR INTENS DE UMA ARRAY, ADICIONAR OU SUBSTITUIR
//MODIFICA A ARRAY ORIGINAL
const array = ['a', 'e', 'i', 'o', 'u']
let retorno = array.splice(1, 1, 'k', 'infinity') //RETORNA ITENS EXCLUIDOS
console.log(array)
//pode apagar muitos, adicionar muitos ou incerir sem apagar!!!


