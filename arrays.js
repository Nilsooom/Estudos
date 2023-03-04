// reatribulçao de array
//IDICE = LOCALIZAÇÃO DO ITEM

const array = ["rato", "gato", "cachorro"];
array[1] = "piriquita"; //substitui a string

console.log(array)
// modificando com variavel:
const x = 0;
array[x] = 10000;

console.log(array);
// comprimento da array
array.length //retorna quantos intens
//adicionar sempre ao final da array:
array[array.length] = "coelhito"
console.log(array)

array.push("jumento") // metodo mais simples
array.pop(); // ESSE METODO APAGA ULTIMO ITEM

// APAGA PRIMEIRO ITEM 
array.shift();
const primeiro = array.shift() // RETORNA PRIMEIRO ITEM
// INCLUI NO PRIMEIRO ITEM
array.unshift("hipopotamo")

//IMPRIMIR ULTIMO ITEM
const tex = ["a", "b", "c"]

const ultimo = tex.push() - 1; //FUNCIONA TAMBEM
console.log(tex[ultimo]);
console.log(tex[tex.length - 1]) // FORMA CORRETA

