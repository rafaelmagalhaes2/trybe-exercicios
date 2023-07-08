
//
// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista: 
//

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Retorna se é true ou false
// numbers.find((num) =>  console.log(num % 3 === 0 && num % 5 === 0));

numbers.find((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + ' é divisível por 3 e 5');
    }
});