// Problema em si

const saldo = 1;

if (saldo == 1) {
    console.log(`Seu saldo é: ${saldo} real`)
} else {
    console.log(`Seu saldo é: ${saldo} reais`)
};

// APLICANDO O TERNARIO

const plural = (saldo === 1 ? "real" : "reais");

console.log(`Voce tem na sua conta ${saldo} ${plural}`);

