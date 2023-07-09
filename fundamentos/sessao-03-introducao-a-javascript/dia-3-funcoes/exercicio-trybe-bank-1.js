
/* 
    Faça um programa para adicionar pessoas clientes ao array do TrybeBank. 
    A função deve se chamar addCustomer e receber um parâmetro do tipo string 
    e, caso o parâmetro não seja do tipo string, imprimir a mensagem: 
    “O parâmetro passado deve ser do tipo string”.
*/

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function addCustomer (customer) {
    
    if(typeof customer != 'string') {
        return 'Não é uma string';
    }
    
    trybeBankCustomers.push(customer);
    return 'Pessoa adicionada';
}

console.log(addCustomer('Rafael'));

