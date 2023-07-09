const order = {
    name: 'Luiz Silva',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            marguerita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            },
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            },
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        },
    },
    payment: {
        total: 50,
    },
};

/*
  Complete a função customerInfo() para que seu retorno seja: 'Olá, Ana Silveira, 
  entrega para: Rafael Andrade, Telefone: 11-98763-1416, Rua das Flores, 
  Número: 389, AP: 701.'. 
*/
const customerInfo = (fullOrder) => {

    const message = `Olá, ${fullOrder.order.delivery.deliveryPerson}, entrega para: ${fullOrder.name}, 
    Telefone: ${fullOrder.phoneNumber}, ${fullOrder.address.street}, Número: ${fullOrder.address.number}, 
    AP: ${fullOrder.address.apartment}.`;

    return message;
};

//console.log(customerInfo(order));

/*
    Complete a função orderModifier() para que seu retorno seja: 
    'Olá, Luiz Silva, o valor total de seu pedido de marguerita, 
    pepperoni e Coca-Cola Zero é R$ 50,00.'
*/
const orderModifier = (fullOrder) => {

    // Usando o Object.keys() para pegar apenas as keys do array
    const pizzas = Object.keys(fullOrder.order.pizza).join(', ')

    const msg = `Olá, ${fullOrder.name}, o valor total do seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é de R$ ${fullOrder.payment.total},00.`;
    return msg;
}

console.log(orderModifier(order));