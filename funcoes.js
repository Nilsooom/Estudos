// parametros: "()" -> execução "{}"
function nomeDaFunção() { };
//Exemplo:
function dizerOla() {
    console.log("Olá")
};
//chamar a função:
dizerOla();
//Função utilizando parametros: "(variavel que só existe aqui)"
//Pode ter mais de um parametros e cita utilizando VIRGULA.
function comprimetar(nome) {
    console.log(`Olá ${nome}`)
}
comprimetar("Julia")
//
//Função com RETORN "return":
function maiorIdade(idade) {
    if (idade >= 18) {
        return true // após o retur a função PARA e não executa mais !!
    } else {
        return false
    }
};

console.log(maiorIdade(15)) // O ideal é guradar o retorno da função em uma variavel:
const valorRetornado = maiorIdade(18) //GUARDA o RETURN TRUE

//Outra Sintaxe de codar função:
const saudoso = (teste) => { console.log(teste) }