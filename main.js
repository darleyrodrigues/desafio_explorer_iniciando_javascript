alert("Hello World!");

let NumA = 10;
let NumB = 5;

function soma(numA, numB) {
    alert( numA + numB); 
}

function subtracao(numA, numB) {
    alert( numA - numB); 
}

function multiplicacao(numA, numB) {
    alert( numA * numB); 
}

function divisao(numA, numB) {
    alert( numA / numB); 
}

function verificaPar(x) {
    if(x % 2 == 0) {
        alert("É um número par")
    } else(alert("Não é um número par"))
}

function verificaImpar(x) {
    if(x % 2 != 0) {
        alert("É um número impar")
    } else(alert("Não é um número impar"))
}

function verificaNum(x) {
    if (!isNaN(x)) { // Verificando se x não é um NaN (não é um número)
        alert("É um número");
    } else {
        alert("Não é um número");
    }
}

function verificaString(x) {
    if (typeof x === 'string') { // Verificando se x é uma string
        alert("É uma string");
    } else {
        alert("Não é uma string");
    }
}

function verificaBoolean(x) {
    if (typeof x === "boolean") { // Verificando se x é um boolean
        alert("É um booleano");
    } else {
        alert("Não é um booleano");
    }
}

/*
verificaNum(NumA); // Chama a função verificaNum passando NumA
verificaString(NumA); // Chama a função verificaString passando NumA
soma(NumA, NumB); // Chama a função soma passando NumA e NumB
verificaBoolean("true")
*/
verificaImpar(7)