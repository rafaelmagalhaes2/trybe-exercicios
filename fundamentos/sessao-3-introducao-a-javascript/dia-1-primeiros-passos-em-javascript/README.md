# 🎯 Dia 1 - Primeiros passos em JavaScript 

## Exercícios 🚀


/*  Exercício 1

    Elabore alguns códigos e imprima o resultado no console usando o console.log, 
    um para cada operação aritmética básica. É necessário que seu código tenha duas 
    variáveis, num1 e num2, definidas no começo com os valores que serão operados. 
    Escreva códigos para:

    Adição (num1 + num2)
    Subtração (num1 - num2)
    Multiplicação (num1 * num2)
    Divisão (num1 / num2)
    Módulo (num1 % num2)
*/  

    let num1 = 10;
    let num2 = 5;

    let adicao = num1 + num2;
    console.log(adicao);

    let subtracao = num1 - num2;
    console.log(subtracao);

    let multiplicacao = num1 * num2;
    console.log(multiplicacao);

    let divisao = num1 / num2;
    console.log(divisao);

    let modulo = num1 % num2;
    console.log(modulo);

/*  Exercício 2

    Utilize if/else para escrever um código que retorne o maior de dois números. 
    Defina, no começo do seu código, duas variáveis com os valores que serão comparados.
*/  

    let num1 = 30;
    let num2 = 50;

    if ( num1 > num2 ) {
        console.log(num1 + ' é maior que ' + num2)
    }
    else{
        console.log(num2 + ' é maior que ' + num1)
    }
  